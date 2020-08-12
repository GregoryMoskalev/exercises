import React, { Component } from 'react';
import Coin from './Coin';
import Counter from './Counter';

export class Container extends Component {
	constructor(props) {
		super(props);

		this.state = {
			sides: []
		};
		this.handleClick = this.handleClick.bind(this);
	}

	flipCoin() {
		let coinSides = this.state.sides;

		coinSides.push(Math.random() < 0.5);
		this.setState({ sides: coinSides });
	}

	handleClick() {
		this.flipCoin();
	}

	render() {
		return (
			<div>
				<Coin side={this.state.sides[this.state.sides.length - 1]} />
				<button onClick={this.handleClick}>Flip the coin!</button>
				<Counter history={this.state.sides} />
			</div>
		);
	}
}

export default Container;
