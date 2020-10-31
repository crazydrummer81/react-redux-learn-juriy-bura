import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {

	swapiService = new SwapiService();
	
	state = {
		peopleList: null
	};

	componentDidMount() {
		this.swapiService
			.getAllPeople()
			.then((peopleList) => {
				this.setState({
					peopleList
				});
			});
	};

	renderItems(arr) {
		return arr.map(({id, name}) => {
			return (
				<li className="list-group-item" 
					key={id}
					onClick={() => this.props.onItemSelected(id)}>
					{name}
				</li>
			);
		});
	};

	render() {

		const { peopleList } = this.state;

		const spinner = peopleList ? null : <li className="list-group-item text-center"><Spinner/></li>;
		const items = peopleList ? this.renderItems(peopleList) : null;

		return (
			<ul className="item-list list-group">
				{spinner}
				{items}
			</ul>
		);
	};
};
