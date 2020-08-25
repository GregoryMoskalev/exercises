import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

export class BoxForm extends Component {
	constructor(props) {
		super(props);
		this.state = { width: '', height: '', color: '' };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(evt) {
		evt.preventDefault();
		const newBox = { ...this.state, id: uuidv4() };
		this.props.add(newBox);
	}

	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value
		});
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>Width</label>
				<input
					name="width"
					id="width"
					value={this.state.width}
					onChange={this.handleChange}
				/>
				<label>Height</label>
				<input
					name="height"
					id="height"
					value={this.state.height}
					onChange={this.handleChange}
				/>
				<label>Color</label>
				<input
					name="color"
					id="color"
					value={this.state.color}
					onChange={this.handleChange}
				/>
				<button>Add Box!</button>
			</form>
		);
	}
}

export default BoxForm;
