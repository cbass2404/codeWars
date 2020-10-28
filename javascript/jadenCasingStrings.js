// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

let str = "How can mirrors be real if our eyes aren't real";

String.prototype.toJadenCase = function () {
  let newString = [];
  for (word of this.valueOf().split(" ")) {
    newString.push(word.replace(word.charAt(0), word.charAt(0).toUpperCase()));
  }
  return newString.join(" ");
};

console.log(str.toJadenCase());
