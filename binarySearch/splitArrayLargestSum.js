// Split Array Largest Sum

// Problem
// nums = [7,2,5,10,8]
// k = 2
// Split the array into exactly k non-empty contiguous subarrays.

// We want to minimize the largest sum among those subarrays.
// Example

// One possible split:

// [7,2,5]  → sum = 14
// [10,8]   → sum = 18

// Largest sum:18

function splitArray(arr, k) {
  let left = Math.max(...arr); // so minimum sumArray can be size of 1 of largest sum
  let right = arr.reduce((acc, el) => acc + el, 0); //Maximum will be sum of all the elements
  // so we got the space to search
  let answer = right;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    let numOfSubArr = 1; // at least single size of array is required;
    let totalSum = 0;

    for (let el of arr) {
      let newSum = totalSum + el;
      if (newSum <= mid) {
        totalSum = newSum;
      } else {
        numOfSubArr += 1;
        totalSum = el;
      }
    }

    if(numOfSubArr<= k){
            // mid works.
      // Try to find a smaller maximum sum.
        answer = mid;
        right = mid-1
    }else{
        left = mid+1;
    }
  }
  return answer;
}

const nums = [7, 2, 5, 10, 8];
const k = 2;

console.log(splitArray(nums,k));
