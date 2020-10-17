import React from 'react';
import './todo-list.css';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone, filter }) => {
	// console.dir(todos);
	// console.log(filter);
	const elements = todos.map((item) => {
		
		let isInFilter = true;
		switch (filter) {
			case 'all':
				break;
			case 'active':
				isInFilter = item.done === false; 
				break;
			case 'done':
				isInFilter = item.done === true;
				break;
		};

		const { id, ...itemProps } = item;
		if (isInFilter)
			return (
				<li key={id} className="list-group-item">
					<TodoListItem 
						{ ...itemProps } 
						onDeleted = {() => onDeleted(id)}
						onToggleImportant = {() => onToggleImportant(id)}
						onToggleDone = {() => onToggleDone(id)}
					/>
				</li>
			);
	});
	return (
	  <ul className="list-group todo-list">
		  { elements }
	  </ul>
	);
 };

 export default TodoList;