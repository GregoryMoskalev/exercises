import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './Joke.css';

class Joke extends Component {
  render() {
    return (
      <div className="Joke">
        <div className="Joke-buttons">
          <FontAwesomeIcon className="icon-up" icon={faArrowUp} onClick={this.props.upvote} />
          <span className="Joke-votes">{this.props.votes}</span>
          <FontAwesomeIcon className="icon-down" icon={faArrowDown} onClick={this.props.downvote} />
        </div>
        <div className="Joke-text">{this.props.text}</div>
        <div className="Joke-smiley">
          <i
            class="em em-rolling_on_the_floor_laughing"
            aria-role="presentation"
            aria-label="ROLLING ON THE FLOOR LAUGHING"
          />
        </div>
      </div>
    );
  }
}

export default Joke;
