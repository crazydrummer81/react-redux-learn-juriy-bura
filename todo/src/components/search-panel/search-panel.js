import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
	state = {
		label: this.props.searchText
	};

	onLabelChange = (e) => {
		const newText = e.target.value;
		this.setState(() => {
			return {label: newText}
		}, () =>
		this.props.onSearchChange(this.state.label));
	};

	render() { 
		return (
			<input type="text"
				className="form-control search-input"
				placeholder='Type here to search'
				onChange={this.onLabelChange}
				value={this.state.label}
				/>
		);
	};
 };
