/* This problem was asked by Google.
Given an array of elements, return the length of the longest subarray where all its elements are distinct.
For example, given the array [5, 1, 3, 5, 2, 3, 4, 1], return 5 as the longest subarray of distinct elements is [5, 1, 3, 2, 4].*/
const arrOriginal = [5, 1, 3, 5, 2, 3, 4, 1];

const longestSubArr = (arr) => {
  let newArr = new Set(arr);
  
  return [...newArr].length;
}

console.log(longestSubArr(arrOriginal));