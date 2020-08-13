import React, { Component } from 'react';
import './Box.css';

export class Box extends Component {
	render() {
		const divStyle = {
			backgroundColor: this.props.color
		};
		return <div className="Container__Box" style={divStyle} />;
	}
}

export default Box;
