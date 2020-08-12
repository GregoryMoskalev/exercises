import React, { Component } from 'react';

export class Counter extends Component {
	render() {
		let all = this.props.history.length;
		let heads = this.props.history.filter((e) => {
			return e;
		}).length;
		return (
			<p>
				Out of {all} flips, there have been {heads} heads and {all - heads} tails
			</p>
		);
	}
}

export default Counter;
