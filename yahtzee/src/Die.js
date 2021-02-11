import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix,
} from '@fortawesome/free-solid-svg-icons';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    numberWords: [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix],
    val: 5,
  };
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.handleClick(this.props.idx);
  }
  render() {
    const { numberWords, val, disabled, locked, rolling } = this.props;
    let classes = 'Die ';
    if (locked) classes += 'Die-locked';
    if (rolling) classes += 'Die-rolling';
    return (
      <FontAwesomeIcon
        icon={numberWords[val - 1]}
        className={classes}
        size={'5x'}
        disabled={disabled}
        onClick={this.onClick}
      />
    );
  }
}

export default Die;
