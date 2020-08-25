import React, { Component } from 'react';

export class Box extends Component {
	render() {
		return (
			<div style={{ width: `${+this.props.width}px` }}>
				<div
					style={{
						width: `${this.props.width}px`,
						height: `${this.props.height}px`,
						backgroundColor: this.props.color
					}}
					id={this.props.id}
				/>
				<button onClick={this.props.remove}>X</button>
			</div>
		);
	}
}

export default Box;
