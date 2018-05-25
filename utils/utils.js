//function to find longest paths
const longestPaths = (map) => {
  let routes = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      routes.push(innerLongestPath(i, j, map));
    }
  }

  //check longest length
  let res = checkLength(routes);
  //sorting from the top of the hill
  for (let i = 0; i < res.length; i++) {
    res[i].paths = res[i].paths.reverse();
  }

  return res;
};

//function to find longest lenth from each inner cell
const innerLongestPath =  (row, col, map) => {
  let length = 0, bestPath = [], cur = {row, col};
  let moves = [{row: row+1, col},{row: row-1, col},{row, col: col+1},{row, col: col-1}];
  //for all possible neighbor cells
  for (let m = 0; m < moves.length; m++) {
    //if cell is valid and smaller
    if (moves[m].row >= 0 && moves[m].row < map.length && moves[m].col >= 0 && moves[m].col < map[0].length && map[moves[m].row][moves[m].col] < map[cur.row][cur.col]) {
      let tempN = innerLongestPath(moves[m].row, moves[m].col, map).length;
      let path = innerLongestPath(moves[m].row, moves[m].col, map).paths;

      if (tempN > length) {
        length = tempN;
        bestPath = path;
      }
    }
    if (bestPath[bestPath.length-1] !== map[row][col])
      bestPath.push(map[row][col]);
  }
  return {length: length + 1, paths: bestPath};
};

//function to check longest lenth
const checkLength = (routes) => {
  let counter = 0, res = [];
  for (let i = 0; i < routes.length; i++) {
    if (counter < routes[i].length)
      counter = routes[i].length;
  }
  for (let j = 0; j < routes.length; j++) {
    if (routes[j].length === counter)
      res.push(routes[j]);
  }

  return res;
};

//function to check steepest or height
const checkSteepest = (res) => {
  let steepestPath = [], steepest = 0;
  for (let i = 0; i < res.length; i++) {
    if (steepest < Math.max(...res[i].paths) - Math.min(...res[i].paths))
      steepest = Math.max(...res[i].paths) - Math.min(...res[i].paths);
  }
  for (let i = 0; i < res.length; i++) {
      if (Math.max(...res[i].paths) - Math.min(...res[i].paths) === steepest)
        steepestPath.push(res[i]);
  }
  return steepestPath;
}

module.exports = { longestPaths , checkSteepest };
