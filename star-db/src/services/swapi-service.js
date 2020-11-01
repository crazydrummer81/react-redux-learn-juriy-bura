export default class SwapiService {

	_apiBase = 'https://swapi.py4e.com/api';
 
	async getResource(url = '') {
	  const res = await fetch(this._apiBase + url);
 
		 if(!res.ok) {
			throw new Error(`Could not fetch: ${url}, receved ${res.status}`);
		 }
		 return await res.json();
	};
 
	getAllPeople = async () => {
	  const res = await this.getResource(`/people/`);
	  return res.results.map(this._transformPerson);
	};
 
	getPerson  = async (id) => {
		const person = await this.getResource(`/people/${id}`);
		return this._transformPerson(person);
	};
 
	getAllPlanets = async () =>  {
	  const res = await this.getResource(`/planets/`);
	  return res.results.map(this._transformPlanet);
	};
 
	getPlanet = async (id) => {
		const planet = await this.getResource(`/planets/${id}`);
	  	return this._transformPlanet(planet);
	};
 
	getAllStarships = async () => {
	  const res = await this.getResource(`/starships/`);
	  return res.results;
	};
 
	getStarship = async (id) => {
		const starship = await this.getResource(`/starships/${id}`);
	  return this._transformStarship(starship);
	};


	_extractId(item) {
		const idRegExp = /\/(\d*)\/$/;
		return item.url.match(idRegExp)[1];
	};

	_transformPlanet = (planet) => {
		
		return {
			id: this._extractId(planet),
			name: planet.name,
			population: planet.population,
			rotationPeriod: planet.rotation_period,
			diameter: planet.diameter
		};
	};

	_transformStarship = (starShip) => {
		return {
			id: this._extractId(starShip),
			name: starShip.name,
			model: starShip.model,
			manufacturer: starShip.manufacturer,
			costInCredits: starShip.cost_in_credits,
			length: starShip.length,
			crew: starShip.crew,
			passengers: starShip.passengers,
			cargoCapacity: starShip.cargo_capacity
		}
	};
	
	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birth_year,
			eyeColor: person.eye_color,
			height: person.height,
			mass: person.mass
		}
	};
};
 
//  const swapi = new SwapiService();
 
//  swapi.getAllPeople().then((people) => {
// 	people.forEach((person) => {
// 	  console.log(person.name);
// 	});
//  });
 
//  swapi.getPerson(3).then((person) => {
// 	console.log('====>>>>', person.name);
//  });