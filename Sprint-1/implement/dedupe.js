function dedupe(arr = []) {
	if(arr.length === 0) return arr;
	const newSet = new Set(arr)
	const newArr = [...newSet];
	return newArr
}

module.exports = dedupe;
