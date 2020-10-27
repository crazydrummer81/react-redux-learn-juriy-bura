export default class SwapiService {

	_apiBase = 'https://swapi.py4e.com/api';
 
	async getResource(url = '') {
	  const res = await fetch(this._apiBase + url);
 
		 if(!res.ok) {
			throw new Error(`Could not fetch: ${url}, receved ${res.status}`);
		 }
		 return await res.json();
	};
 
	async getAllPeople() {
	  const res = await this.getResource(`/people/`);
	  return res.results.map(this._transformPerson);
	};
 
	async getPerson(id) {
		const person = await this.getResource(`/people/${id}`);
		return this._transformPerson(person);
	};
 
	async getAllPlanets() {
	  const res = await this.getResource(`/planets/`);
	  return res.results.map(this._transformPlanet);
	};
 
	async getPlanet(id) {
		const planet = await this.getResource(`/planets/${id}`);
	  	return this._transformPlanet(planet);
	};
 
	async getAllStarships() {
	  const res = await this.getResource(`/starships/`);
	  return res.results;
	};
 
	async getStarship(id) {
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
			costInCredits: starShip.costInCredits,
			length: starShip.length,
			crew: starShip.crew,
			passengers: starShip.passengers,
			cargoCapacity: starShip.cargoCapacity
		}
	};
	
	_transformPerson = (person) => {
		return {
			id: this._extractId(person),
			name: person.name,
			gender: person.gender,
			birthYear: person.birthYear,
			eyeColor: person.eyeColor		
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