import React, { Component } from 'react';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './item-list.css';

export default class ItemList extends Component {

	// swapiService = new SwapiService();

	
	
	state = {
		itemList: null
	};

	componentDidMount() {

		const { getData } = this.props;
		console.log('getData:',getData());

		getData()
		// this.swapiService.getAllItem()
			.then((itemList) => {
				this.setState({
					itemList
				});
			});
	};

	renderItems(arr) {
		//todo people gender birthYear
		//todo planet diametr
		//todo starship model

		return arr.map((item) => {
			
			const {id} = item;
			const label = this.props.renderItem(item);
			
			return (
				<li className="list-group-item" 
					key={id}
					onClick={() => this.props.onItemSelected(id)}>
					{label}
				</li>
			);
		});
	};

	render() {

		const { itemList } = this.state;

		const spinner = itemList ? null : <li className="list-group-item text-center"><Spinner/></li>;
		const items = itemList ? this.renderItems(itemList) : null;

		return (
			<ul className="item-list list-group">
				{spinner}
				{items}
			</ul>
		);
	};
};
