const shape = {
	type: 'segment',
	coordinates: {
		start: [10,15],
		end:   [17,15]
	}
};

console.log(shape);

const { coordinates: { start: [startX, startY], end: [endX, endY] } } = shape;

console.log(startX, startY, endX, endY);