// Problem Statement
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be inserted to keep the array sorted.

// Example 1
// nums = [1,3,5,6]
// target = 5

// Output: 2

function insertElementIfNotFound(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    }
    if(arr[mid] <  target){
        left = mid+1
    }else{
        right = mid-1;
    }
  }

return left;
}
const nums = [1,3,5,6];
console.log(insertElementIfNotFound(nums, 2))
