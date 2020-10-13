import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import TodoListAddItem from '../todo-list-add-item';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {

	state = { // !Нельзя изменять существующий State,
		todoData: [
			{ label: 'Drink Coffee', important: false, id: 1 },
			{ label: 'Eat cheese', important: true, id: 2 },
			{ label: 'Play guitar', important: false, id: 3  },
		]
	};

	deleteItem = (id) => {
		this.setState(({ todoData }) => { //! поэтому делаем так!
			const idx = todoData.findIndex((el) => el.id === id);
			console.log(idx);

			const newArray = [
				...todoData.slice(0, idx),
				...todoData.slice(idx + 1)
			];

			return {
				todoData: newArray
			}
		});
	}

	render() {
		return (
			<div className="todo-app">
				<AppHeader toDo={1} done={3}/>
				<div className="search-panel d-flex">
					<SearchPanel />
					<ItemStatusFilter />
				</div>
				<TodoList
					todos={ this.state.todoData }
					onDeleted={ this.deleteItem }
				/>
				<TodoListAddItem />
			</div>
		);
	};
};