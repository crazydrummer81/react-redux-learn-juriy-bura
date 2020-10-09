const defaults = {
	host: 'localhost',
	dbName: 'blog',
	user: 'admin'
};

const opts = {
	user: 'John',
	password: '1234'
};

const result = Object.assign({}, defaults, opts);

const port = 8080;
const res = {
	...defaults,
	...opts,
	port,
	connect() {
		console.log('connect...');
	}
};

console.log(result);
console.log(res);

