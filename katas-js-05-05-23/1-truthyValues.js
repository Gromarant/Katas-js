/* Crea una función que determine si una array contiene valores truthy.
Ejemplos de input
[ 0, null, undefined, NaN] --> false
[null, false,1]  --> true (edited)  */

const hasTruthy = (arr) => {
  let result;
  for(let i=0; i<=arr.length; i++) {
    const falsies = [false, 0, -0, 0n, "", null, undefined, NaN];
    
     result = falsies.find(falsy => falsy !== arr[i]);
    // if (arr[i] !== false || arr[i] !== 0 || arr[i] !== -0 || arr[i] !== 0n || arr[i] !== "" || arr[i] !== null || arr[i] !== undefined || arr[i] !== NaN) {
      
    // }
   }
  return result;
}

hasTruthy([null, false,1])