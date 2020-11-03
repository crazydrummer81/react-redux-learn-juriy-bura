import React, { Component } from 'react';

import './people-page.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import Row from '../Row';

export default class PeoplePage extends Component {

	swapiService = new SwapiService();

	state = {
		selectedPerson: 3,
		gasError: false
	};

	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		});
	};

	onItemSelected = (selectedPerson) => {
		this.setState({
			selectedPerson
		});
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator/>
		};

		const itemList = (
			<ItemList 
				onItemSelected={this.onItemSelected}
				getData={this.swapiService.getAllPeople}
				renderItem={({name, gender, birthYear}) => 
						<React.Fragment>
							<strong>{name}</strong> <span>gender: {gender}, BY: {birthYear}</span>
						</React.Fragment>
				}/>
		);

		const personDetails = (
			<PersonDetails personId={this.state.selectedPerson}/>
		);

		return (
			<Row left={itemList} right={personDetails} />
		);
	};
};

