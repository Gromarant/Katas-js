/* Crea una función que invierta un array de dos dimensiones
input
[
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]]
//output
[
[1, 4, 7],
[2, 5, 8],
[3, 6, 9]] */

const inverseArr = (arr) => {
  let a, b, c;
  let result= [];
  for (let i=0; i<=arr.length; i++) {
    a = arr[0][i]
    b = arr[1][i]
    c = arr[2][i]
    let newArr = [a, b, c];
    result.push(newArr);
  }
  return result; 
}