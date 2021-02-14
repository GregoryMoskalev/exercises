import React, { Component } from 'react';
import './CardButton.css';

class CardButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.getCard();
  }

  render() {
    return (
      <button className="Deck-btn" onClick={this.handleClick}>
        Get Card!
      </button>
    );
  }
}
export default CardButton;
