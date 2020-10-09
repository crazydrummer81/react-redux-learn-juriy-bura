const animal = {
	say() {
		console.log(this.name, this.voice);
	}
}
dog = Object.create(animal);
dog.name = 'dog';
dog.voice = 'bau-waw';

dog.say();

//----------------------------

function createAnimal(name, voice){
	const result = Object.create(animal);
	result.name = name;
	result.vioce = voice;
	return result;
};

cat = createAnimal('cat', 'myau');
console.log(cat);

//----------------------------

function Animal(name, voice) {
	this.name = name;
	this.voice = voice;
}
Animal.prototype.say = function() { console.log(this.name, this.voice); }

const cow = new Animal('cow', 'moooo');
cow.say();
console.dir(cow);