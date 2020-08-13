import React, { Component } from 'react';
import './Coin.css';

export class Coin extends Component {
	render() {
		return (
			<div>
				<img className="Coin" src={this.props.side.imgSrc} alt={this.props.side.side} />
			</div>
		);
	}
}

export default Coin;
