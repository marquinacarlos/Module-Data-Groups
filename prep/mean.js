const items = [4.6, 5.03, 7.99, 8.01];


function sumValues(list) {
  let total = 0;
  total += list[0]; // access a list element and add to total
  total += list[1];
  total += list[2];
  total += list[3];
  total += list[4];
  return total;
}

sumValues([1, 2, 3, 4, 5]);

/**
	The sumValues function has hardcoded index access (list[0] through list[4]),  
  which creates two problems:    

  1. Too few elements: If the array has fewer than 5 elements (like items with  
  only 4 elements), accessing list[4] returns undefined. Adding undefined to a  
  number produces NaN, so the entire result becomes NaN. 

  2. Too many elements: If the array has more than 5 elements, anything beyond  
  index 4 is ignored and won't be included in the sum. 
 */