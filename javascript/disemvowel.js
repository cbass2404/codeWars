let string = "This website is for losers LOL!";

function disemvowel(str) {
  return str.replace(/[aeiou]/ig, "");
}

console.log(disemvowel(string));
