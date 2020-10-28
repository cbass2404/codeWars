function arrayDiff(a, b) {
  let result = a.filter((item) => {
    if (!b.includes(item)) {
        return Number.isFinite(item)
    }
  });
  return result
}

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2, 2], [2]));
console.log(
  arrayDiff(
    [2, -6, -8, 14, 16, 0, 7, -18, 18, -15, 9, 19, 20],
    [20, 18, 9, 0, 14, -8, -6, 16, 19, -18]
  )
);
