function sum(elements = []) {
	if(elements.length === 0) return 0;
	return elements.reduce((accumulator, currentValue) => {
		return typeof currentValue === "number" && !isNaN(currentValue)
			? accumulator + currentValue
			: accumulator
	}, 0);
}

module.exports = sum;
