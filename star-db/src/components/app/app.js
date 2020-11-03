// https://swapi.py4e.com/documentation#people

import React, {Component} from 'react';

import './app.css';

import ItemDetails from '../item-details';
import ItemList from '../item-list';
import RandomPlanet from '../random-planet';
import Header from '../header';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {

	swapiService = new SwapiService();

	state = {
		hasError: false,
	};

	// onItemSelected = (id) => {
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

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onItemSelected}
							getData={this.swapiService.getAllPlanets}
							renderItem={({name, diameter}) => 
								<React.Fragment>
									<strong>{name}</strong> <span>⌀: {diameter}</span>
								</React.Fragment>}/>
					</div>
					<div className="col-md-6">
						<ItemDetails itemId={this.state.selectedPerson}/>
					</div>
				</div>

				<div className="row mb2">
					<div className="col-md-6">
						<ItemList
							onItemSelected={this.onStarshipSelected}
							getData={this.swapiService.getAllStarships}
							renderItem={({name, model}) => 
								<React.Fragment>
									<strong>{name}</strong> <span>model: {model}</span>
								</React.Fragment>}/>
					</div>
					<div className="col-md-6">
						<ItemDetails itemId={this.state.selectedStarship}/>
					</div>
				</div>

			</div>
		);
	};
};