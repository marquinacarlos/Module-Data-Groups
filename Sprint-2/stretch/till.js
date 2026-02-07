// totalTill takes an object representing coins in a till

// Given an object of coins
// When this till object is passed to totalTill
// Then it should return the total amount in pounds

function totalTill(till) {
  let total = 0;

  for (const [coin, quantity] of Object.entries(till)) {
    total += parseInt(coin) * quantity;
  }

  return `£${total / 100}`;
}

const till = {
  "1p": 10,
  "5p": 6,
  "50p": 4,
  "20p": 10,
};
const totalAmount = totalTill(till);

// a) What is the target output when totalTill is called with the till object
// "£4.4" — (1*10 + 5*6 + 50*4 + 20*10) = 440 pence = £4.4

// b) Why do we need to use Object.entries inside the for...of loop in this function?
// Because we need both the key (coin name) and the value (quantity). Object.entries gives [key, value] pairs.

// c) What does coin * quantity evaluate to inside the for...of loop?
// NaN — coin is a string like "1p", and "1p" * number is NaN because "1p" is not a pure numeric string.

// d) Write a test for this function to check it works and then fix the implementation of totalTill
// Fix: use parseInt(coin) to extract the numeric part from strings like "1p", "50p".

module.exports = totalTill;
