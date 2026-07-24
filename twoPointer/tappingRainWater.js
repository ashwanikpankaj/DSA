// Given an array representing bar heights:
//Each number is the height of a bar.
//How much rainwater can be trapped after it rains?
//Output: 6

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

function findMaxElement(arrPart) {
  let max = 0;

  for (const el of arrPart) {
    max = Math.max(el, max);
  }

  return max;
}

function bruteForceTappingWater() {
  // Approach will be at current pointer find left and right and min of this max value to find th container
  let sum = 0;

  for (let i = 0; i < height.length; i++) {
    const leftArr = height.slice(0, i + 1); // include the same number as well to get max height
    const rightArr = height.slice(i);
    const leftMax = findMaxElement(leftArr);
    const rightMax = findMaxElement(rightArr);
    console.log(leftArr, rightArr, leftMax, rightMax);

    const currSum = Math.min(leftMax, rightMax) - height[i];

    if (currSum > 0) {
      sum = sum + currSum;
    }
  }

  return sum;
}

// console.log(bruteForceTappingWater(height))

function optimizedApproach(arr) {
  let i = 0;
  let j = arr.length - 1;
  let water = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (i < j) {
    leftMax = Math.max(leftMax, arr[i]);
    rightMax = Math.max(rightMax, arr[j]);

    if (leftMax <= rightMax) {
      water += leftMax - arr[i];
      i++
    }else{
      water += rightMax - arr[j];
      j--
    }
  }

  return water;
}

console.log(optimizedApproach(height))
