import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
	static defaultProps = { side: [ 'one', 'two', 'three', 'four', 'five', 'six' ] };
	constructor() {
		super();
		this.state = {
			dice: [ 0, 0 ]
		};
		this.roll = this.roll.bind(this);
	}

	roll() {
		let randArray = [];
		for (let i = 0; i < this.state.dice.length; i++) {
			randArray.push(Math.floor(Math.random() * this.props.side.length));
		}

		this.setState({ dice: randArray });
	}
	render() {
		return (
			<div className="RollDice">
				<Die side={this.props.side[this.state.dice[0]]} />
				<Die side={this.props.side[this.state.dice[1]]} />
				<button className="RollDice__btn" onClick={this.roll}>
					Roll Dice!
				</button>
			</div>
		);
	}
}
