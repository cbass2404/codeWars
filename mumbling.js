// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
  let letters = s.split("");
  let newString = [];
  for (i in letters) {
    newString.push(letters[i].toUpperCase() + letters[i].repeat(i).toLowerCase());
  }
  return String(newString.join('-'));
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
