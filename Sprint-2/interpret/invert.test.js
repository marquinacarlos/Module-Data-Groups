const invert = require("./invert.js");

test("swaps keys and values for a single key-value pair", () => {
  expect(invert({ a: 1 })).toEqual({ "1": "a" });
});

test("swaps keys and values for multiple key-value pairs", () => {
  expect(invert({ a: 1, b: 2 })).toEqual({ "1": "a", "2": "b" });
});

test("returns an empty object when given an empty object", () => {
  expect(invert({})).toEqual({});
});
