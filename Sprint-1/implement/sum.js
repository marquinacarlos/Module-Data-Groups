function sum(elements = []) {
	if(elements.length === 0) return 0;
	const initialValue = 0;
	const sumWithInitial = elements.reduce(
		(accumulator, currentValue) => accumulator + currentValue,
		initialValue
	);
	return sumWithInitial;
}

module.exports = sum;
