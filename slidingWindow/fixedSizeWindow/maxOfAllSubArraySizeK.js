// find the maximum of subarray of size k

const arr1 = [1, 3, -1, -3, 5, 3, 6, 7];
const wS = 3;

// max of subarray (1,3,-1)  =>maximum will be 3

function maxInSubarray(arr, k) {
  let ans = [];
  let i = 0;
  let j = 0;
  let list = [];
  while (j < arr.length) {
    list.push(arr[j]);
    if (j - i + 1 < k) {
      j++;
    }
    // now equals the window size
    else if (j - i + 1 === k) {
      // do the calculations
      const max = Math.max(...list);
      ans.push(max);
      j++;
      i++;
      // remove the first element of list because i is shifted to right
      list.shift();
    }
  }
  return ans;
}

//console.log(maxInSubarray(arr1, wS));

function bruteForceApproach(arr, k) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let tempArr = [];
    for (let j = i; j < k + i && j < arr.length; j++) {
      tempArr.push(arr[j]);
      if (tempArr.length === k) {
        break;
      }
    }
    if (tempArr.length === k) {
      ans.push(Math.max(...tempArr));
    }
  }
  return ans;
}
console.log(bruteForceApproach(arr1, wS));

// tutorial approach

function secondSlidingApproach(arr, k) {
  let i = 0;
  let j = 0;
  let ans = [];
  let list = [];
  while (j < arr.length) {
    // here we are cheking in the list if an element is lesser than that index of j element
    // we are removing since at that if arr[j] is greater then every element in list will be smaller so it can't be maximum
    while (list.length > 0 && list[0] < arr[j]) {
      list.shift();
    }
    list.push(arr[j]);

    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      ans.push(list[0]);
      // do all the calculations
      // if first element of storage index is equal to arr index to that i then remove it since we need to slide the i
      if (list[0] === arr[i]) {
        list.shift();
      }
      j++;
      i++;
    }
  }
  return ans;
}
console.log(secondSlidingApproach(arr1, wS), "second approach");
