/* Sum the numbers in an array

In this kata, you will need to implement a function that sums the numerical elements of an array

E.g. sum([10, 20, 30]), target output: 60
E.g. sum(['hey', 10, 'hi', 60, 10]), target output: 80 (ignore any non-numerical elements)
*/

const sum = require("./sum.js");

// Acceptance Criteria:

describe('sum.js test', () => {
	// Given an empty array
	// When passed to the sum function
	// Then it should return 0
	test("given an empty array, returns 0", () => {
		const result = sum([]);
		expect(result).toBe(0);
	});

	// Given an array with just one number
	// When passed to the sum function
	// Then it should return that number
	test("given an array with just one number, returns that number", () => {
		const result = sum([42]);
		expect(result).toBe(42);
	});

	// Given an array containing negative numbers
	// When passed to the sum function
	// Then it should still return the correct total sum
	test("given an array containing negative numbers, returns the correct total sum", () => {
		const result = sum([10, -5, 3, -2]);
		expect(result).toBe(6); // 10 - 5 + 3 - 2 = 6
	});

	// Given an array with decimal/float numbers
	// When passed to the sum function
	// Then it should return the correct total sum
	test("given an array with decimal numbers, returns the correct total sum", () => {
		const result = sum([1.5, 2.3, 0.2]);
		expect(result).toBe(4); // 1.5 + 2.3 + 0.2 = 4.0
	});

	// Given an array containing non-number values
	// When passed to the sum function
	// Then it should ignore the non-numerical values and return the sum of the numerical elements
	test("given an array with non-number values, ignores them and returns sum of numbers", () => {
		const result = sum(['hello', 10, 'world', 20, 5]);
		expect(result).toBe(35); // 10 + 20 + 5 = 35
	});

	// Given an array with only non-number values
	// When passed to the sum function
	// Then it should return the least surprising value given how it behaves for all other inputs
	test("given an array with only non-number values, returns 0", () => {
		const result = sum(['hello', 'world', 'test']);
		expect(result).toBe(0); // Sin números, la suma es 0
	});
});


