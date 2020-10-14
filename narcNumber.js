function narcissistic(value) {
  let arrValue = value.toString().split(" ").length;
  if (arrValue === 1) return true;
  let result = () => {
    value.toString().split(" ").map(Math.pow(Number, arrValue));
  };
  return result();
}

// console.log(narcissistic(7));
console.log(narcissistic(371));
