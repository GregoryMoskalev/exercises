import React, { Component } from 'react';
import Card from './Card';
import CardButton from './CardButton';
import './Deck.css';
import axios from 'axios';
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck';

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: null, drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    const deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({ deck: deck.data });
  }

  async getCard() {
    let id = this.state.deck.deck_id;
    try {
      let cardUrl = `${API_BASE_URL}/${id}/draw/`;
      let cardRes = await axios.get(cardUrl);
      if (!cardRes.data.success) {
        throw new Error('No cards remaining!');
      }
      console.log(cardRes.data);
      let card = cardRes.data.cards[0];
      this.setState((st) => ({
        drawn: [
          ...st.drawn,
          { id: card.code, image: card.image, name: `${card.suit} ${card.value}` },
        ],
      }));
    } catch (err) {
      alert(err);
    }
  }
  render() {
    const cards = this.state.drawn.map((c) => {
      return <Card key={c.id} name={c.name} image={c.image} />;
    });
    return (
      <div className="Deck">
        <h1 className="Deck-title">Card Dealer</h1>
        <h2 className="Deck-title subtitle">A little demo made with React</h2>
        <CardButton getCard={this.getCard} />
        <div className="Deck-cardarea">{cards}</div>
      </div>
    );
  }
}
export default Deck;
