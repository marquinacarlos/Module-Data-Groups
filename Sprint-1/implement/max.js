function findMax(elements = []) {
	let max = -Infinity;
	elements.forEach((num) => {
		max = num > max ? num : max;
	});
	return max;
}
// console.log(findMax())


module.exports = findMax;