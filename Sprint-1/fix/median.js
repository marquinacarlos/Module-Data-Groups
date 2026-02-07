// Fix this implementation
// Start by running the tests for this function
// If you're in the Sprint-1 directory, you can run `npm test -- fix` to run the tests in the fix directory

// Hint: Please consider scenarios when 'list' doesn't have numbers (the function is expected to return null)
// or 'list' has mixed values (the function is expected to sort only numbers).

const filterNumbers = (arr = []) => arr.filter((item) => typeof item === "number" && !isNaN(item));
filterNumbers([ 'not an array', 123, null, undefined, {}, [], ["apple", null, undefined] ])

const sortNumberAsc = (arr = []) => arr.sort((a, b) => a - b);

const isEven = (number) => number % 2 === 0;

const isArray = (arr) => Array.isArray(arr);

function calculateMedian(arr) {
  if(!isArray(arr)) return null;
  const arrCopy = [...arr];
  const numbers = filterNumbers(arrCopy);
  const { length } = numbers;
  if(length === 0) return null;
  const ascendingNumbers = sortNumberAsc(numbers);
  if(isEven(length)) {
    const lowerMiddleIndex = (length / 2 - 1);
    const upperMiddleIndex = length / 2;
    const lowerMiddleValue = ascendingNumbers[lowerMiddleIndex];
    const upperMiddleValue = ascendingNumbers[upperMiddleIndex];
    const median = (lowerMiddleValue + upperMiddleValue) / 2;
    return median;
  }
  const middleIndex = Math.floor(ascendingNumbers.length / 2);
  // const median = ascendingNumbers.splice(middleIndex, 1)[0];
  const median = ascendingNumbers[middleIndex]; 
  return median;
}

module.exports = calculateMedian;
