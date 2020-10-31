// https://swapi.py4e.com/documentation#people

import React, {Component} from 'react';

import './app.css';

import PersonDetails from '../person-details';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import Header from '../header';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

export default class App extends Component {

	state = {
		hasError: false
	};

	// onPersonSelected = (id) => {
	// 	this.setState({
	// 		selectedPerson: id
	// 	});
	// };

	componentDidCatch() {
		console.log('componentDidCatch()');
		this.setState({hasError: true});
	};

	render() {

		if (this.setState.hasError) {
			return <ErrorIndicator/>;
		};

		return (
			<div className="container">
				<Header />
				<RandomPlanet />
				<PeoplePage/>
				<PeoplePage/>
				<PeoplePage/>
			</div>
		);
	};
};