import React, { Component } from 'react';

import './random-planet.css';

import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends Component {

	swapiService = new SwapiService();

	state = {
		planet: {},
		loading: true,
		error: false
	};

	componentDidMount() {
		// console.log('componentDidMount()');
		this.updatePlanet();
		this.interval = setInterval(this.updatePlanet, 5000);
	};

	componentWillUnmount() {
		console.log('componentWillUnmount()');
		clearInterval(this.interval);
	};

	onPlanetLoaded = (planet) => {
		this.setState({
			planet,
			loading: false
		});
	};

	onError = (err) => {
		this.setState({
			error: true,
			loading: false
		})
	};

	updatePlanet = () => {
		// console.log('updatePlanet()');
		const id = Math.floor(Math.random()*25 + 2);
		// const id = 12000;
		this.swapiService
			.getPlanet(id)
			.then(this.onPlanetLoaded)
			.catch(this.onError);
	};

	
	render() {
		// console.log('render()');
		const { planet, loading, error } = this.state;

		const hasData = !(loading || error);

		const errorMessage = error ? <ErrorIndicator /> : null;
		const spinner = loading ? <Spinner /> : null;
		const content = hasData ? <PlanetView planet={planet}/> : null;


		return (
			<div className="random-planet card">
				{errorMessage}
				{spinner}
				{content}
			</div>
		);
	};
};

const PlanetView = ({planet}) => {
	const { id, name, population, rotationPeriod, diameter } = planet;
	return (
		<React.Fragment>
			<img className="planet-image"
				src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} 
				alt={`Planet ${name}`}/>
			<div className="card-body">
				<h4>{name}</h4>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Popuation</span>
						<span>{population}</span>
					</li>
				</ul>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Rotation period</span>
						<span>{rotationPeriod}</span>
					</li>
				</ul>
				<ul className="list-group list-group-flush">
					<li className="list-group-item">
						<span className="term">Diameter</span>
						<span>{diameter}</span>
					</li>
				</ul>
			</div>
		</React.Fragment>
	);
};

