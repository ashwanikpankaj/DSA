// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search for target in nums.

// If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Input:nums = [-1,0,3,5,9,12]
// target = 9
// Output:4


function searchTargetByBinarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // Find the middle index
        const mid = left + Math.floor((right - left) / 2);

        // Target found
        if (arr[mid] === target) {
            return mid;
        }

        // Target is in the right half
        if (arr[mid] < target) {
            left = mid + 1;
        }
        // Target is in the left half
        else {
            right = mid - 1;
        }
    }

    // Target not found
    return -1;
}

const nums = [-1,0,3,5,9,12]
console.log(searchTargetByBinarySearch(nums, 9))