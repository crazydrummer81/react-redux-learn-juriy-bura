import React, { Component } from 'react';
import './todo-list-add-item.css';

export default class TodoListAddItem extends Component {

	state = {
		value: ""
	}

	onChange = (event) => {
		this.setState({value: event.target.value});
	}
	
	render() {
		const classNames = "d-flex add-item";
		const onAddItem = (input) => {
			console.log('ADD', input);
		};
		return (
			<form name="add-item">
				<div className={ classNames }>
					<input 
						className="form-control"
						type="text"
						placeholder="Add new task"
						value={this.state.value}
						onChange = { this.onChange }/>
					<button 
						type="button" 
						className="btn btn-outline-success float-right"
						onClick={ onAddItem }>
						<i className="fa fa-plus"></i>
					</button>
				</div>
			</form>
		);
	}
};

