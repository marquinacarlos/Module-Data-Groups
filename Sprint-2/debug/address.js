// Predict and explain first...
// Prediction: logs "My house number is undefined"
// Explanation: address[0] tries to access index 0 like an array, but objects use named keys.
// Fix: use address.houseNumber to access the property by name.

// This code should log out the houseNumber from the address object
// but it isn't working...
// Fix anything that isn't working

const address = {
  houseNumber: 42,
  street: "Imaginary Road",
  city: "Manchester",
  country: "England",
  postcode: "XYZ 123",
};

console.log(`My house number is ${address.houseNumber}`);
