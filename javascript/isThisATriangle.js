function isTriangle(a, b, c) {
  let array = [a, b, c].sort((a, b) => a - b);
  if (array[0] + array[1] > array[2]) {
      return true;
  } else {
      return false;
  }
}

console.log(isTriangle(1, 2, 2)); // true
console.log(isTriangle(7, 2, 2)); // false
