import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';
import ItemStatusFilter from './components/item-status-filter';

import './components/app.css';

const App = () => {

  const todoData = [
    { label: 'Drink Coffee', important: false, id: 1 },
    { label: 'Eat cheese', important: true, id: 2 },
    { label: 'Play guitar', important: false, id: 3  },
  ]

  return (
    <div className="todo-app">
      <AppHeader toDo="2" done="1"/>
      <div className="search-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={ todoData }/>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

