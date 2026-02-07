// Predict and explain first...
// Prediction: throws TypeError - author is not iterable.
// Explanation: for...of works on iterables (arrays, strings), not plain objects.
// Fix: use Object.values(author) to get an iterable array of the object's values.

// This program attempts to log out all the property values in the object.
// But it isn't working. Explain why first and then fix the problem

const author = {
  firstName: "Zadie",
  lastName: "Smith",
  occupation: "writer",
  age: 40,
  alive: true,
};

for (const value of Object.values(author)) {
  console.log(value);
}
