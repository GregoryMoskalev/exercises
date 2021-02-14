import React, { Component } from 'react';
import Joke from './Joke';
import axios from 'axios';
import uuid from 'uuid/dist/v4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh } from '@fortawesome/free-regular-svg-icons';
import './JokeList.css';

class JokeList extends Component {
  static defaultProps = {
    numJokesToGet: 10,
  };
  constructor(props) {
    super(props);
    this.state = {
      jokes: JSON.parse(window.localStorage.getItem('jokes') || '[]'),
      loading: false,
    };
    this.seenJokes = new Set(this.state.jokes.map((j) => j.text));
    this.handleClick = this.handleClick.bind(this);
  }
  async getJokes() {
    try {
      const jokes = [];
      while (jokes.length < this.props.numJokesToGet) {
        const res = await axios.get('https://icanhazdadjoke.com/', {
          headers: { Accept: 'application/json' },
        });
        let newJoke = res.data.joke;
        if (!this.seenJokes.has(newJoke)) {
          jokes.push({ id: uuid(), text: res.data.joke, votes: 0 });
        } else {
          console.log('"found a duplicate');
          console.log(newJoke);
        }
      }
      this.setState(
        (st) => ({
          loading: false,
          jokes: [...st.jokes, ...jokes],
        }),
        () => {
          window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
        },
      );
    } catch (e) {
      alert(e);
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    if (this.state.jokes.length === 0) {
      this.setState({ loading: true }, this.getJokes);
    }
  }
  handleVote(id, delta) {
    this.setState(
      (st) => ({
        jokes: st.jokes.map((j) => {
          return j.id === id ? { ...j, votes: j.votes + delta } : j;
        }),
      }),
      () => {
        window.localStorage.setItem('jokes', JSON.stringify(this.state.jokes));
      },
    );
  }
  handleClick() {
    this.setState({ loading: true }, this.getJokes);
  }
  render() {
    if (this.state.loading) {
      return (
        <div className="JokeList-spinner">
          <FontAwesomeIcon icon={faLaugh} size="8x" className="fa-spin" />
          <h1 className="JokeList-title">Loading...</h1>
        </div>
      );
    }
    return (
      <div className="JokeList">
        <div className="JokeList-sidebar">
          <h1 className="JokeList-title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="laughing with tears emoticon"
          />
          <button className="JokeList-getmore" onClick={this.handleClick}>
            New Jokes
          </button>
        </div>
        <div className="JokeList-jokes">
          {this.state.jokes.map((j) => {
            return (
              <Joke
                key={j.id}
                votes={j.votes}
                text={j.text}
                upvote={() => this.handleVote(j.id, 1)}
                downvote={() => this.handleVote(j.id, -1)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default JokeList;
