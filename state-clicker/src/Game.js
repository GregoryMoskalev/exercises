import React, { Component } from 'react';
import './Game.css';

export class Game extends Component {
	constructor() {
		super();
		this.state = {
			num: 1
		};
		this.randomNumber = this.randomNumber.bind(this);
	}

	randomNumber() {
		let rand = Math.floor(Math.random() * 10);
		this.setState({ num: rand });
	}

	render() {
		return (
			<div>
				<h1>Number is {this.state.num}</h1>
				<h2 className={this.state.num === 7 ? 'winner-header' : 'loser-header'}>
					You win!!!
				</h2>
				<button
					className={this.state.num === 7 ? 'winner-btn' : 'loser-btn'}
					onClick={this.randomNumber}
				>
					Click me!
				</button>
			</div>
		);
	}
}
export default Game;
