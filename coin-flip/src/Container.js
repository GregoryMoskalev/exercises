import React, { Component } from 'react';
import Coin from './Coin';
import Counter from './Counter';

export class Container extends Component {
	static defaultProps = {
		coins: [
			{
				side: 'heads',
				imgSrc:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/George_Washington_Presidential_%241_Coin_obverse.png/1280px-George_Washington_Presidential_%241_Coin_obverse.png'
			},
			{
				side: 'tails',
				imgSrc:
					'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Presidential_dollar_coin_reverse.png/1280px-Presidential_dollar_coin_reverse.png'
			}
		]
	};
	constructor(props) {
		super(props);

		this.state = {
			sidesHistory: []
		};
		this.handleClick = this.handleClick.bind(this);
	}

	flipCoin() {
		let coinSides = this.state.sidesHistory;

		coinSides.push(Math.random() < 0.5);
		this.setState({ sidesHistory: coinSides });
	}

	handleClick() {
		this.flipCoin();
	}

	render() {
		let coinSide = this.state.sidesHistory[this.state.sidesHistory.length - 1]
			? this.props.coins[0]
			: this.props.coins[1];
		return (
			<div>
				<Coin side={coinSide} />
				<button onClick={this.handleClick}>Flip the coin!</button>
				<Counter history={this.state.sidesHistory} />
			</div>
		);
	}
}

export default Container;
