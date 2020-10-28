function isValidWalk(walk) {
  const matrix = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let row = 5;
  let column = 5;
  walk.forEach((dir) => {
    if (dir == "n") {
      row -= 1;
    } else if (dir == "s") {
      row += 1;
    } else if (dir == "w") {
      column -= 1;
    } else if (dir == "e") {
      column += 1;
    } else {
      return false;
    }
  });
  if (matrix[row][column] === 1 && walk.length === 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))