// given array of size = 7; window size  = 3; find max sum of the subarray of that size window

//naive approach

var arr = [2, 5, 1, 8, 2, 9, 1];
var k = 3;

var maxSum = -Infinity;

for (let i = 0; i < arr.length; i++) {
  let sum = 0;
  for (let j = i; j < k + i; j++) {
    sum = sum + arr[j];
  }
  if (sum > maxSum) {
    maxSum = sum;
  }
}
console.log(maxSum, "maxSum");

// optimized approach

function slidingWindowApproach(arr1, k1) {
  let sum = 0;
  let maxSum = -Infinity;
  let i = 0;
  let j = 0;
  while (j < arr1.length) {
    sum += arr[j];
    if (j - i + 1 < k1) {
      j++;
    } else if (j - i + 1 === k1) {
      maxSum = Math.max(sum, maxSum);
      sum = sum - arr1[i];
      i++;
      j++;
    }
  }
  return maxSum;
}

console.log(slidingWindowApproach(arr, k));
