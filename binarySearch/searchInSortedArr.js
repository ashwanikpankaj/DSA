// 🟡 Problem #20 — Search in Rotated Sorted Array (LeetCode 33)
// Problem Statement

// You are given a sorted array that has been rotated.

// Find the target and return its index.

// If it doesn't exist, return -1.

// You must solve it in O(log n).

// nums = [4,5,6,7,0,1,2]
// target = 0

// Output:4


while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
        return mid;
    }

    // Left half is sorted
    if (arr[left] <= arr[mid]) {

        // Target lies inside the left sorted half
        if (target >= arr[left] && target < arr[mid]) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }

    }
    // Right half is sorted
    else {

        // Target lies inside the right sorted half
        if (target > arr[mid] && target <= arr[right]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }

    }
}