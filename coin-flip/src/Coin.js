import React, { Component } from 'react';
import './Coin.css';

export class Coin extends Component {
	render() {
		return (
			<div>
				{this.props.side ? (
					<img
						className="Coin"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/George_Washington_Presidential_%241_Coin_obverse.png/1280px-George_Washington_Presidential_%241_Coin_obverse.png"
						alt="head"
					/>
				) : (
					<img
						className="Coin"
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Presidential_dollar_coin_reverse.png/1280px-Presidential_dollar_coin_reverse.png"
						alt="tail"
					/>
				)}
			</div>
		);
	}
}

export default Coin;
