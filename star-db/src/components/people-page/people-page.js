import React, { Component } from 'react';

import './people-page.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import PersonDetails from '../person-details';



export default class PeoplePage extends Component {

	state = {
		selectedPerson: 3,
		gasError: false
	};

	componentDidCatch(error, info) {
		this.setState({
			hasError: true
		});
	};

	onPersonSelected = (selectedPerson) => {
		this.setState({
			selectedPerson
		});
	};

	render() {
		if (this.state.hasError) {
			return <ErrorIndicator/>
		}

		return (
			<div className="row mb2">
				<div className="col-md-6">
					<ItemList onItemSelected={this.onPersonSelected}/>
				</div>
				<div className="col-md-6">
					<PersonDetails personId={this.state.selectedPerson}/>
				</div>
			</div>
		);
	};
};
