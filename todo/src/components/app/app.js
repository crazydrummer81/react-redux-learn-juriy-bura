import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';

const App = () => {

	const filter = 'active';

	const todoData = [
	  { label: 'Drink Coffee', important: false, id: 1 },
	  { label: 'Eat cheese', important: true, id: 2 },
	  { label: 'Play guitar', important: false, id: 3  },
	];
 
	return (
	  <div className="todo-app">
		 <AppHeader toDo="2" done="1"/>
		 <div className="search-panel d-flex">
			<SearchPanel />
			<ItemStatusFilter filter={ filter }/>
		 </div>
		 <TodoList todos={ todoData }/>
	  </div>
	);
 };

export default App;