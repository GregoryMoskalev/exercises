import React, { Component } from 'react';

export class Game extends Component {
	constructor() {
		super();
		this.state = {
			num: 1
		};
		this.randomNumber = this.randomNumber.bind(this);
	}

	randomNumber() {
		let rand = Math.floor(Math.random() * 10 + 1);
		this.setState({ num: rand });
	}

	render() {
		return (
			<div>
				<h1>Number is {this.state.num}</h1>
				{this.state.num === 7 ? (
					<h2>You win!!!</h2>
				) : (
					<button onClick={this.randomNumber}>Click me!</button>
				)}
			</div>
		);
	}
}
export default Game;
