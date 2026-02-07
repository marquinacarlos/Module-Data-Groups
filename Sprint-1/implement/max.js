function findMax(elements = []) {
	let max = -Infinity;
	elements.forEach((num) => {
		max = num > max ? num : max;
	});
	return max;
}

module.exports = findMax;