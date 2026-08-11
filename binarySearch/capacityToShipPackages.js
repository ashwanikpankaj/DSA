// Next: Capacity To Ship Packages Within D Days — LeetCode 1011

// Problem

// You have packages with weights:

// weights = [1,2,3,4,5,6,7,8,9,10]
// You have:

// days = 5
// The packages must be shipped in the given order.

// Each day, you can ship a consecutive group of packages as long as their total weight doesn't exceed the ship's capacity.
// Example

// If capacity is 15, one possible schedule is:

// Day 1: 1 + 2 + 3 + 4 + 5 = 15
// Day 2: 6 + 7 = 13
// Day 3: 8 = 8
// Day 4: 9 = 9
// Day 5: 10 = 10

// So capacity 15 works.

// We need to find the minimum capacity that allows everything to be shipped within 5 days.

function sum(arr) {
  let sum = 0;
  for (let el of arr) {
    sum += el;
  }

  return sum;
}

function minCapacity(weights, days) {
  let left = Math.max(...weights); // since at least max of the weight will have to allowed to be shipped, to have one package shipment allowed
  let right = sum(weights);
  let answer = right;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2); // max capacity allowed to finish in target days
    let numOfDayRequired = 1; ///since at least one is required
    let totalWeight = 0;

    for (let el of weights) {
      newWt = totalWeight + el;
      if (newWt <= mid) {
        totalWeight = newWt;
      } else {
        totalWeight = el;
        numOfDayRequired += 1;
      }
    }
      if (numOfDayRequired <= days) {
        // capacity is there , lets find more minimum capacity
        answer = mid;
        right = mid - 1;
      } else {
        // capacity we will have to increase to allow in timelimit
        left = mid + 1;
      }
    }

    return answer;
  }


const weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const days = 5;

console.log(minCapacity(weights, days));
