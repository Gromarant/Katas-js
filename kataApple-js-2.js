/* Ejercicio
This problem was asked by Apple.

A fixed point in an array is an element whose value is equal to its index. Given a sorted array of distinct elements, return a fixed point, if one exists. Otherwise, return False.For example, given [-6, 0, 2, 40], you should return 2. Given [1, 5, 7, 8], you should return False.*/
const fixedPoint = (arr) => {
  const fixesArr = [];

  for (let index=0; index<=arr.length; index++) {
    if (arr[index] === index) {
      fixesArr.push(index);
    }
  }
  if (fixesArr.length > 0) {
    return fixesArr;
  } else {
    return false;
  }
}
 console.log(fixedPoint([-6, 0, 2, 40]));
 console.log(fixedPoint([1, 5, 7, 8]));