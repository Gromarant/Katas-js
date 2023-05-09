/* Crea una función que determine si una array contiene valores truthy.
Ejemplos de input
[ 0, null, undefined, NaN] --> false
[null, false,1]  --> true (edited)  */

const hasTruthy = (arr) => {
  let truthy = arr.filter(ele =>  ele == true ? ele: false);
  if (truthy.length !== 0) { return truthy }
  else { return false }
}

console.log(hasTruthy([null, false,1]))
console.log(hasTruthy([ 0, null, undefined, NaN]))