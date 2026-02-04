function sum(elements = []) {
	if(elements.length === 0) return 0;
	const initialValue = 0;
	const callback = (accumulator, currentValue) => {
		return typeof currentValue === "number" && !isNaN(currentValue)
			? accumulator + currentValue
			: accumulator
	}
	const sumWithInitial = elements.reduce(callback, initialValue);
	return sumWithInitial;
}

module.exports = sum;
