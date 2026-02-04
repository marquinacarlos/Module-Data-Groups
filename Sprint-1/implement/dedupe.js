function dedupe(arr = []) {
	return arr.length === 0 ? arr : [...new Set(arr)];
}

module.exports = dedupe;
