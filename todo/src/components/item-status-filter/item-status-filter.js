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
		const { filter, onFilterChange } = this.props;
		const buttons = filterButtons.map(({name, label}) => {
			const isActive = name === filter;
			const classNames = (isActive ? 'btn-info': 'btn-outline-secondary');
	
			return (
				<button	key={name}
							type="button"
							className={'btn ' + classNames}
							onClick={() => onFilterChange(name)}>
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
