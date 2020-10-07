function square(x) {
	return x*x;
}

const sq = (x) => x*x;

const arr = ['1', '3', '2', '4'];

const res = arr
	.map((el) => parseInt(el))
	.filter((num) => num%2)
	.reduce((max, value) => Math.max(max, value), 0);


console.log(res);