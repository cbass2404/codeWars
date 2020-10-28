// Test.assertEquals(squareDigits(9119), 811181);

function squareDigits(num) {
  return Number(
    num
      .toString()
      .split("")
      .map((val) => (val *= val))
      .join("")
  );
}

console.log(squareDigits(9119));
