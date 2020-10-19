import React from 'react';

import './app.css';

import PersonDetails from '../person-details';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import Header from '../header';

const App = () => {
	return (
		<div>
			<Header />
			<RandomPlanet />

			<div className="row mb2">
				<div className="cold-md-6">
					<ItemList />
				</div>
				<div className="col-md-6">
					<PersonDetails />
				</div>
			</div>
		</div>
	);
};

export default App;