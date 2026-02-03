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