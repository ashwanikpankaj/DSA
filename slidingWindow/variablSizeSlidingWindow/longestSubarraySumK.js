// find the longest subarray of sum k;
// it is a kind of variable window size

const array = [4, 1, 1, 1, 2, 3, 5];
const sum = 5; // this will be like find all the array whose sum is k

// in variable size some condition is given for the subarray

function bruteForcApproach(arr, k) {
  let maxSubarrayLength = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let tempArr = [];
    for (let j = i; j < k + i && j < arr.length; j++) {
      if (sum < k) {
        sum += arr[j];
        tempArr.push(arr[j]);
      }
    }
    if (sum === k) {
      maxSubarrayLength = Math.max(maxSubarrayLength, tempArr.length);
    }
  }
  return maxSubarrayLength;
}
console.log(bruteForcApproach(array, sum));

function longestSubArrayOfSumK(arr, k) {
  let i = 0;
  let j = 0;
  let arrSum = 0;
  let max = 0;
  while (j < arr.length) {
    arrSum += arr[j];
    if (arrSum < k) {
      j++;
    }
    // condition matches now do the calculation
    else if (arrSum === k) {
      max = Math.max(max, j - i + 1);
      j++;
    } else if (arrSum > k) {
      while (arrSum > k) {
        arrSum -= arr[i];
        i++;
      }
      j++;
    }
  }
  return max;
}
console.log("max", longestSubArrayOfSumK(array, sum));
