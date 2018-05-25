//import relevant functions
const { longestPaths , checkSteepest } = require('./utils/utils');

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

//find longest
let longest = longestPaths(map);
//find steepest
let steepest = checkSteepest(longest);
// //display result
console.log('-----------------------------------------------------');
console.log(`\nBelow are the longest possible paths down the hill:\n`);
console.log(longest);
console.log(`\nBelow is the steepest route down the hill of height ${Math.max(...steepest[0].paths) - Math.min(...steepest[0].paths)}:\n`);
console.log(steepest);
console.log('\n-----------------------------------------------------');
