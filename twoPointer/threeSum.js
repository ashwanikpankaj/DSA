const nums = [-1, 0, 1, 2, -1, -4];

// By HashMap

function byHashMap(nums) {
  for (let i = 0; i < nums.length; i++) {
    const target = -nums[i];
    const seen = new Set();

    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue; // Skip the fixed element

      const need = target - nums[j];

      if (seen.has(need)) {
        // return the result here bro!!
      }

      seen.add(nums[j]);
    }
  }
}

function byTwoPointer(numArr) {
  const sortedArr = numArr.sort((a,b) => a - b);
  const result = []
  // x+y+z = 0 -> so fix first element so target is -x
  for(let i = 0; i< sortedArr.length; i++){
    const target = -sortedArr[i];

    let right = sortedArr.length-1;
    let left = i+1;

    while(left <right){
        const sum = sortedArr[left] + sortedArr[right];
        if(sum > target){
            right--
        }else if(sum<target){
            left++
        }else{
             result.push([sortedArr[i], sortedArr[left], sortedArr[right]]);
             left++;
             right--
        }
    }
  }

  return result;
}

console.log(byTwoPointer(nums))
