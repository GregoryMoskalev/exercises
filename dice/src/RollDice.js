import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

export default class RollDice extends Component {
	static defaultProps = { side: [ 'one', 'two', 'three', 'four', 'five', 'six' ] };
	constructor() {
		super();
		this.state = {
			dice: [ 0, 0 ],
			rolling: false
		};
		this.roll = this.roll.bind(this);
	}

	roll() {
		let randArray = [];
		for (let i = 0; i < this.state.dice.length; i++) {
			randArray.push(Math.floor(Math.random() * this.props.side.length));
		}

		this.setState({ dice: randArray, rolling: true });

		setTimeout(() => {
			this.setState({ rolling: false });
		}, 1000);
	}
	render() {
		return (
			<div className="RollDice">
				<div className="RollDice__container">
					<Die side={this.props.side[this.state.dice[0]]} rolling={this.state.rolling} />
					<Die side={this.props.side[this.state.dice[1]]} rolling={this.state.rolling} />
				</div>
				<button className="RollDice__btn" onClick={this.roll} disabled={this.state.rolling}>
					{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}
				</button>
			</div>
		);
	}
}
