// Test.assertEquals(findOutlier([0, 1, 2]), 1);
// Test.assertEquals(findOutlier([1, 2, 3]), 2);
// Test.assertEquals(findOutlier([2, 6, 8, 10, 3]), 3);
// Test.assertEquals(findOutlier([0, 0, 3, 0, 0]), 3);
let array = [0, 1, 2];

function findOutlier(integers) {
  let oddArray = [];
  let evenArray = [];
  for (int of integers) {
    if (int % 2 === 0) {
      evenArray.push(int);
    } else {
      oddArray.push(int);
    }
  }
  if (evenArray.length < oddArray.length) {
    return evenArray[0];
  } else {
    return oddArray[0];
  }
}

console.log(findOutlier(array));
