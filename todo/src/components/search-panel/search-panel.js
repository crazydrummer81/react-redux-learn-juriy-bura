import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
	
	state = {
		searchText: this.props.searchText
	};

	onSearchChange = (e) => {
		const searchText = e.target.value;
		this.setState({ searchText });
		this.props.onSearchChange(searchText);
	};

	render() { 
		return (
			<input type="text"
				className="form-control search-input"
				placeholder='Type here to search'
				onChange={this.onSearchChange}
				value={this.state.searchText}
				/>
		);
	};

 };
