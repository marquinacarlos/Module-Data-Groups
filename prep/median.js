import { calculateMean } from "./mean";

function calculateMedian(list) {
  const middleIndex = Math.floor(list.length / 2);
  // const median = list.splice(middleIndex, 1)[0];
  const median = list[middleIndex];

  return median;
}

const salaries = [10, 20, 30, 40, 60, 80, 80];
const median = calculateMedian(salaries);
console.log(salaries, "<--- salaries input before we call calculateMean")
const mean = calculateMean(salaries);

console.log(`The median salary is ${median}`);
console.log(`The mean salary is ${mean}`);

/**
 * Two issues arise when running this code:
 *
 * 1. calculateMean is not defined - This causes a ReferenceError because
 *    the function doesn't exist in this file.
 *
 * 2. splice mutates the original array - After calling calculateMedian,
 *    the salaries array changes from [10, 20, 30, 40, 60, 80, 80] (7 elements)
 *    to [10, 20, 30, 60, 80, 80] (6 elements). This means any subsequent
 *    calculation (like mean) would use the mutated array, producing incorrect
 *    results. To fix this, use direct index access instead: list[middleIndex]
 */