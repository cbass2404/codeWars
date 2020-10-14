var moveZeros = function (arr) {
    arr.map(function(num){
        if (num === 0) {
            arr.remove(num);
            arr.push(0);
        }
    })
  }

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ]));