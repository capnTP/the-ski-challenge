//this function is for finding highest ground and return next path
const findNext = (cur, cells) => {
  let temp = cells.map( c => c.value);
  // cells.sort();
  let next = temp.filter( v => v < cur);
  let max = Math.max(...next);

  return cells.find( c => c.value === max);
};

//this function is used to return a possible path from all cell in map[i][j]; as i = row, j = column
const findPath = (map) => {
  let cur = {}, next = {}, tempPath = [], path = [];
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        cur = { row: i, col: j, value: map[i][j] };
        tempPath.push(cur);

        while (map[cur.row][cur.col] !== 0) {
          let cells = [];

          //check if cell around current cell is valid
          if (cur.row-1 >= 0 && map[cur.row-1][cur.col])
            cells.push({row: cur.row-1, col: cur.col, value: map[cur.row-1][cur.col]});

          if (cur.row+1 < map.length && map[cur.row+1][cur.col])
            cells.push({row: cur.row+1, col: cur.col, value: map[cur.row+1][cur.col]});

          if (cur.col+1 < map[i].length && map[cur.row][cur.col+1])
            cells.push({row: cur.row, col: cur.col+1, value: map[cur.row][cur.col+1]});

          if (cur.col-1 >= 0 && map[cur.row][cur.col-1])
            cells.push({row: cur.row, col: cur.col-1, value: map[cur.row][cur.col-1]});

          //find next coordinates and value from current cell
          next = findNext(cur.value, cells);

          //if no suitable value is found exit
          if (!next)
            break;

          //otherwise continue
          tempPath.push(next);
          cur = next;
          next = {};
        }

        path.push(tempPath);
        tempPath = [];
      }
    }

  return path;
};

//a function to find the longest path
const findLongest = (paths) => {
  let counter = 0;
  let longPaths = [];

  //first find the longest possible length
  for (let i = 0; i < paths.length; i++) {
    if (paths[i].length > counter)
      counter = paths[i].length;
  }

  //then find any path with the following length
  for (let i = 0; i < paths.length; i++) {
    if (paths[i].length === counter)
      longPaths.push(paths[i]);
  }

  return longPaths;
};

//a function to find steepest route
const findSteepest = (paths) => {
  let counter = 0, steepestRoute = [];

  //first find steepest value
  for (let i = 0; i < paths.length; i++) {
    let temp = paths[i].map( p => p.value );
    let max = Math.max(...temp);
    let min = Math.min(...temp);
    let res = max - min;

    if (counter < res)
      counter = res;
  }

  //then find the route that has the following value
  for (let i = 0; i < paths.length; i++) {
    let temp = paths[i].map( p => p.value );
    let max = Math.max(...temp);
    let min = Math.min(...temp);

    if (max - min === counter)
      steepestRoute.push(temp);
  }

  return steepestRoute;
};

module.exports = { findNext , findPath , findLongest , findSteepest };
