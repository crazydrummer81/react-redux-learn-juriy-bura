import React, { Component } from 'react';
import './todo-list-item.css';

export default class TodoListItem extends Component {

	state = {
		done: false
	}

	onLabelClick = () => {
		this.setState({
			done: !this.state.done
		});
	};

	render() {
		const { label, important = false } = this.props;
		const { done } = this.state;

		let classNames = 'todo-list-item';
		if (important) {
			classNames += ' important';
		};
		if (done) {
			classNames += ' done';
		}
		else {
			classNames.replace(' done', '');
		}
		return (
			<span className={classNames}>
				<span
					className="todo-list-item-label"
					onClick={ this.onLabelClick }>
					{ label }
				</span>
		
				<button type="button"
						  className="btn btn-outline-success btn-sm float-right">
					<i className="fa fa-exclamation"></i>
				</button>
	
				<button type="button"
						  className="btn btn-outline-danger btn-sm float-right">
					<i className="fa fa-trash-o"></i>
				</button>
			</span>
		);
	}
}
