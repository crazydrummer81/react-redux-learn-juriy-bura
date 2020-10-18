import React, { Component } from 'react';
import './item-status-filter.css';

const filterButtons = [
	{ name: 'all', label: 'All' },
	{ name: 'active', label: 'Active' },
	{ name: 'important', label: 'Important' },
	{ name: 'done', label: 'Done' },
];

export default class ItemStatusFilter extends Component {

	render() {
		const buttons = filterButtons.map(({name, label}) => {
			const isActive = name === this.props.filter;
			const classNames = 'btn ' + (isActive ? 'btn-info': 'btn-outline-secondary');
	
			return (
				<button	key={name}
							type="button"
							className={classNames}
							onClick={() => this.props.onFilterChange(name)}>
							{label}</button>
			);
		});
	
		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}
