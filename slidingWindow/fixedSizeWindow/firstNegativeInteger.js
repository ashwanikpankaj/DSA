// find the first negative integer in the arr of window size k of the given array

// here to find the number of output here will be size-k+1 =>
// eg size = 8; k = 3; noOfOutput = size-k+1;

var arr = [12, -1, -7, 8, -15, 30, 16, 28];
var k = 3;

function bruteForce(array, wS) {
  let ansArr = [];
  for (let i = 0; i < array.length; i++) {
    let flag = false;
    for (let j = i; j < wS + i && j < arr.length; j++) {
      if (arr[j] < 0) {
        ansArr.push(arr[j]);
        flag = true;
        break;
      } else if (j - i + 1 === wS && !flag) {
        console.log(j - i + 1, { j, i });
        ansArr.push(0);
      }
    }
  }
  return ansArr;
}

console.log(bruteForce(arr, k), "brute force approach");

function slidingWindowApproach(givenArr, windowSize) {
  let j = 0;
  let i = 0;
  const negativeArrayList = [];
  const answerList = [];

  while (j < givenArr.length) {
    if (givenArr[j] < 0) {
      negativeArrayList.push(givenArr[j]);
    }
    if (j - i + 1 < windowSize) {
      j++;
    } else if (j - i + 1 === windowSize) {
      if (negativeArrayList.length === 0) {
        answerList.push(0);
        j++;
      } else {
        answerList.push(negativeArrayList[0]);
        if (negativeArrayList[0] === givenArr[i]) {
          negativeArrayList.shift();
        }
        j++;
        i++;
      }
    }
  }
  return answerList;
}

console.log(slidingWindowApproach(arr, k), "sliding window approach");
