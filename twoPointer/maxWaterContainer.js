// Brute force approach

const arrayNum = [1, 8, 6, 2, 5, 4, 8, 3, 7];

function maxWaterContainerBruteForce(arr) {
  let maxArea = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      const area = (j - i) * Math.min(arr[i], arr[j]);
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
}

console.log(maxWaterContainerBruteForce(arrayNum));

function optimizedApproach(arr) {
  let maxWaterStored = 0;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    const area = (j - i) * Math.min(arr[i], arr[j]);
    maxWaterStored = Math.max(maxWaterStored, area);
    const current = arr[i];

    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxWaterStored;
}

console.log(optimizedApproach(arrayNum))