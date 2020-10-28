function rot13(message) {
  function inRange(x, min, max) {
    return (x - min) * (x - max) <= 0;
  }
  return message.split("").map((letter) => {
    let decNum = letter.charCodeAt(0);
    if (!inRange(decNum, 65, 90) && !inRange(decNum, 97, 122)) {
      return letter;
    } else {
      return inRange(decNum, 65, 77) || inRange(decNum, 97, 109)
        ? String.fromCharCode(decNum + 13)
        : String.fromCharCode(decNum - 13);
    }
  }).join('');
}

console.log(rot13("test"));
console.log(rot13("Test"));
console.log(rot13("!Test"));
