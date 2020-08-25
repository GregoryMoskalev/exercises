import React, { Component } from 'react';
import Box from './Box.js';
import BoxForm from './BoxForm.js';

export class BoxList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			boxes: []
		};
		this.add = this.add.bind(this);
		this.remove = this.remove.bind(this);
	}

	add(item) {
		this.setState((state) => ({
			boxes: [ ...state.boxes, item ]
		}));
	}

	remove(id) {
		console.log(id, this.state.boxes.filter((box) => box.id !== id));
		this.setState({ boxes: this.state.boxes.filter((box) => box.id !== id) });
	}

	renderItems() {
		return (
			<div>
				{this.state.boxes.map((item) => (
					<Box
						width={item.width}
						height={item.height}
						color={item.color}
						key={item.id}
						id={item.id}
						remove={() => this.remove(item.id)}
					/>
				))}
			</div>
		);
	}

	render() {
		const boxes = this.state.boxes.map((item) => (
			<Box
				width={item.width}
				height={item.height}
				color={item.color}
				key={item.id}
				id={item.id}
				remove={() => this.remove(item.id)}
			/>
		));
		return (
			<div>
				<h1>Box Maker!</h1>
				<BoxForm add={this.add} />
				{boxes}
			</div>
		);
	}
}

export default BoxList;
