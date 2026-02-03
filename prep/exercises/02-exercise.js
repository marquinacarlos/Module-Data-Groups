// Write a function which takes an array as a parameter
//   and swaps the first element with the last element

function swapFirstAndLast(arr = []) {
  const firstValue = arr[0];
  const lastValue = arr[arr.length - 1];
  arr.shift();
  arr.pop();
  arr.unshift(lastValue);
  arr.push(firstValue);
  return arr;
}

const myArray = [5, 2, 3, 4, 1];
// swapFirstAndLast(myArray);
console.log(myArray); // what output should we expect?
console.log(swapFirstAndLast(myArray));