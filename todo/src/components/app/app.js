import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemAddForm from '../item-add-form';
import ItemStatusFilter from '../item-status-filter';

export default class App extends Component {

	maxId = 100;

	state = { // !Нельзя изменять существующий State,
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Eat cheese'),
			this.createTodoItem('Play guitar')
		],
		filter: 'all',
		searchText: '' 
	};

	createTodoItem(label) {
		return {
			label, 
			important: false,
			done: false, 
			id: this.maxId++
		}
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
	};

	addItem = (text) => {
		console.log('Added', text);
		const newItem = this.createTodoItem(text);

		this.setState(({todoData}) => {
			const newArray = [...todoData, newItem];
			return { todoData: newArray }
		});
	};

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = {...oldItem, [propName]: !oldItem[propName]};
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		];

	};
	
	onToggleDone = (id) => {
		this.setState(({ todoData }) => { //! поэтому делаем так!
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	onToggleImportant = (id) => {
		console.log('Toggle IMPORTANT:', id);
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};

	onFilterChange = (key) => {
		// console.log(key);
		this.setState(() => {
			return { filter: key }
		});
	};

	onSearchChange = (text) => {
		this.setState(() => {
			return {
				searchText: text
			}
		});
	};

	render() {

		const {todoData} = this.state;
		const doneCount = todoData
								.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div className="todo-app">
				<AppHeader toDo={todoCount} done={doneCount}/>
				<div className="search-panel d-flex">
					<SearchPanel 
						searchText={this.state.searchText}
						onSearchChange={this.onSearchChange}/>
					<ItemStatusFilter 
						filter = {this.state.filter}
						onFilterChange = {this.onFilterChange} />
				</div>
				<TodoList
					todos={ todoData }
					onDeleted={ this.deleteItem }
					onToggleDone = { this.onToggleDone }
					onToggleImportant = { this.onToggleImportant }
					filter = {this.state.filter}
					searchText = {this.state.searchText}
				/>
				<ItemAddForm
					onItemAdded={this.addItem}
				/>
			</div>
		);
	};
};