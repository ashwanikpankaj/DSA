const nums = [2, 11, 15, 7];
const target = 9;

function getTwoSumIndices(numArr, sumTarget) {
  const map = new Map();

  for (let i = 0; i < numArr.length; i++) {
    const complement = sumTarget - numArr[i];

    // We need to do undefined since if we get map.get(complement) = 0; so this will not in if condition. if you dont need
    // this condition then go with map.has(complement)
    if (map.get(complement) !== undefined) {
      const complementIndex = map.get(complement);

      return [complementIndex, i];
    } else {
      map.set(numArr[i], i);
    }
  }

  return "Not Present!!"
}

const result = getTwoSumIndices(nums, target);
console.log(result)
