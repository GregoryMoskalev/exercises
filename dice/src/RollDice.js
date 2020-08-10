import React, { Component } from 'react';
import Die from './Die';

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
		for (let i = 0; i < 2; i++) {
			randArray.push(Math.floor(Math.random() * 6));
		}

		this.setState({ dice: randArray });
	}
	render() {
		return (
			<div>
				<Die side={this.props.side[this.state.dice[0]]} />
				<Die side={this.props.side[this.state.dice[1]]} />
				<button onClick={this.roll}>Roll</button>
			</div>
		);
	}
}
