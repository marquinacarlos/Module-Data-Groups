const countWords = require("./count-words.js");

test("counts word frequency in a simple string", () => {
  expect(countWords("you and me and you")).toEqual({ you: 2, and: 2, me: 1 });
});

test("removes punctuation before counting", () => {
  expect(countWords("hello! hello, world.")).toEqual({ hello: 2, world: 1 });
});

test("ignores case when counting words", () => {
  expect(countWords("Hello hello HELLO")).toEqual({ hello: 3 });
});

test("returns an empty object for an empty string", () => {
  expect(countWords("")).toEqual({});
});
