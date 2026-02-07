// Let's define how invert should work

// Given an object
// When invert is passed this object
// Then it should swap the keys and values in the object

// E.g. invert({x : 10, y : 20}), target output: {"10": "x", "20": "y"}

function invert(obj) {
  const invertedObj = {};

  for (const [key, value] of Object.entries(obj)) {
    invertedObj[value] = key;
  }

  return invertedObj;
}

// a) What is the current return value when invert is called with { a : 1 }
// Returns { key: 1 } — it sets a literal property called "key" to the last value.

// b) What is the current return value when invert is called with { a: 1, b: 2 }
// Returns { key: 2 } — "key" gets overwritten each iteration, ending with the last value.

// c) What is the target return value when invert is called with {a : 1, b: 2}
// { "1": "a", "2": "b" }

// c) What does Object.entries return? Why is it needed in this program?
// It returns an array of [key, value] pairs. It's needed to iterate over both keys and values.

// d) Explain why the current return value is different from the target output
// invertedObj.key uses dot notation, which always sets the literal property "key".
// It should use bracket notation: invertedObj[value] = key, to set a dynamic key.

// e) Fix the implementation of invert (and write tests to prove it's fixed!)

module.exports = invert;
