/* Exercise: https://www.codewars.com/kata/51edd51599a189fe7f000015*/
//first approach:
const solution = (firstArray, secondArray) => {
  let resultArr = []
  for ( let index in firstArray) {
    resultArr.push((firstArray[index]-secondArray[index])**2);
  }
  return resultArr.reduce((acc, ele) => (acc + ele / firstArray.length), 0)
}

//second approach:
const solution1 = (firstArray, secondArray) => {
  return firstArray
                  .map((ele, index) => (ele - secondArray[index])**2)
                  .reduce((acc, item) => (acc + item /firstArray.length), 0);
}
