/* Crea una función que determine si una array contiene valores truthy.
Ejemplos de input
[ 0, null, undefined, NaN] --> false
[null, false,1]  --> true (edited)  */

const hasTruthy = (arr) => {
  let result;
  for(let i=0; i<arr.length; i++) {
    if (arr[i]) {
      result = true;
    } else {
      result = false;
    }
  }
  return result;
}

console.log(hasTruthy([0, null, undefined, NaN]))
console.log(hasTruthy([null, false, 1, "0"]))