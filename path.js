//import relevant functions
const { findNext , findPath , findLongest , findSteepest } = require('./utils/utils');

//define the given map down below
const map = [
  [51,39,64,4,42,15,23,35],
  [20,84,66,91,72,38,19,55],
  [94,7,28,99,36,69,8,99],
  [79,98,91,73,11,60,76,61],
  [98,40,65,40,54,88,74,73],
  [71,40,63,43,77,82,97,71],
  [89,24,71,24,93,79,23,71],
  [76,14,43,86,73,19,47,71]
];

//find all routes with the possible longest length
let longest = findLongest(findPath(map));
//find one with the steepest value
let steepest = findSteepest(longest);
console.log('-----------------------------------------------------');
console.log(`\nBelow are the longest possible routes down the hill with length = ${longest[0].length}:\n`);

longest.forEach( (r) => {
  console.log(r.map( e => e.value ));
})

console.log('\nBelow is the steepest route down the hill:\n');
console.log(steepest);
console.log('\n-----------------------------------------------------');
