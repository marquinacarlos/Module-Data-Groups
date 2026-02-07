const { readFile } = require('node:fs/promises');
const path = require('node:path');
const sum = require('./../../implement/sum');

const inputPath = path.join(__dirname, 'input.txt');

readFile(inputPath, 'utf-8')
  .then(res => res.split("\n"))
  .then(numbers => numbers.map(Number))
  .then(numbers => sum(numbers))
  .then(result => console.log(result))
  .catch(err => console.error('Error:', err));

// readFile(inputPath, 'utf-8')
// .then(res => res.split("\n").map(Number))
// .then(sum)
// .then(console.log)
// .catch(console.error);