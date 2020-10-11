import React, { Component } from 'react';
import './item-status-filter.css';

const filterButtons = [
	{ name: 'all', label: 'All' },
	{ name: 'active', label: 'Active' },
	{ name: 'done', label: 'Done' },
];

const filter = 'active';

export default class ItemStatusFilter extends Component {
	render() {
		const buttons = filterButtons.map(({name, label}) => {
			const isActive = name === filter;
			const classNames = 'btn ' + (isActive ? 'btn-info': 'btn-outline-secondary');
	
			return (
				<button	key={name}
							type="button"
							className={classNames}>{label}</button>
			);
		});
	
		return (
			<div className="btn-group">
				{buttons}
			</div>
		);
	}
}
