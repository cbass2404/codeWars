var moveZeros = function (arr) {
  for (let idx in arr) {
    // if (arr[idx] === 0) {
    //   arr.splice(arr[idx]);
    //   arr.push(0);
    return idx;
  }
  return arr;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
