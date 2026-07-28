// Problem #19 — Find First and Last Position of Element in Sorted Array (LeetCode 34)
// Problem Statement

// Given a sorted array of integers (may contain duplicates) and a target, return the first and last position of the target.

// If the target doesn't exist, return:[-1, -1]

// Example 1

// nums = [5,7,7,8,8,10]
// target = 8

// Output:[3,4]

function generalApporach() {
  let first = -1;
  let last = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (first === -1) {
        first = i;
      }
      last = i;
    }
  }

  return [first, last];
}

function firstOccurrenceIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      // Found an occurrence.
      // Save it and continue searching on the left
      // to see if an earlier occurrence exists.
      answer = mid;
      right = mid - 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

function lastOccurrenceIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let answer = -1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      // Found an occurrence.
      // Save it and continue searching on the right
      // to see if a later occurrence exists.
      answer = mid;
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return answer;
}

function findFirstAndLastOccurrence(arr, target) {
  const first = firstOccurrenceIndex(arr, target);

  if (first === -1) {
    return [-1, -1];
  }

  const last = lastOccurrenceIndex(arr, target);

  return [first, last];
}

// Test
const nums = [5, 7, 7, 8, 8, 10];

console.log(findFirstAndLastOccurrence(nums, 8)); // [3, 4]
console.log(findFirstAndLastOccurrence(nums, 7)); // [1, 2]
console.log(findFirstAndLastOccurrence(nums, 6)); // [-1, -1]
console.log(findFirstAndLastOccurrence(nums, 5)); // [0, 0]
console.log(findFirstAndLastOccurrence(nums, 10)); // [5, 5]
