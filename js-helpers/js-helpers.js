const randomInteger = (min, max) => {
	return min + Math.floor(Math.random() * (max - min + 1));
}

const distance = (x1, y1, x2, y2) => {
	const xdist = x2 - x1;
	const ydist = y2 - y1;
	return Math.sqrt(xdist * xdist + ydist * ydist);
}

const pointDistance = (p1, p2) => {
	return distance(p1.x, p1.y, p2.x, p2.y);
}

const distanceShorterThan = (x1, y1, x2, y2, distance) => {
	const xdist = x2 - x1;
	const ydist = y2 - y1;
	return xdist * xdist + ydist * ydist < distance * distance;
}

const pointDistanceShorterThan = (p1, p2, distance) => {
	return distanceShorterThan(p1.x, p1.y, p2.x, p2.y, distance);
}

module.exports = {
	randomInteger,
	distance,
	pointDistance,
	pointDistanceShorterThan,
};