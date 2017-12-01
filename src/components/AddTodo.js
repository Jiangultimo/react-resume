import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class AddTodo extends Component {
	constructor(props){
		super(props);
	}

	handleClick(e) {
		const node = this.refs.input;
		const text = node.value.trim();
		this.props.onAddClick(text);
		node.value = '';
	}
	render() {
		return (
			<div>
				<input type="text" ref="input" />
				<button onClick={ (e) => this.handleClick(e)}>Add</button>
			</div>
		);
	}
}
AddTodo.propTypes = {
	onAddClick: PropTypes.func.isRequired
}

