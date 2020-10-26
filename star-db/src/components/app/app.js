// https://swapi.py4e.com/documentation#people

import React from 'react';

import './app.css';

import PersonDetails from '../person-details';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import Header from '../header';

const App = () => {
	return (
		<div className="container">
			<Header />
			<RandomPlanet />

			<div className="row mb2">
				<div className="container">
					<ItemList />
				</div>
				<div className="col-md-12">
					<PersonDetails />
				</div>
			</div>
		</div>
	);
};

export default App;