// Given an integer array nums,
// return true if any value appears at least twice in the array,
// and return false if every element is distinct.

const numArr = [1,6,3,53];

function containsDuplicate(nums){
    const set = new Set();

    for(let i = 0; i < nums.length; i++){
        if(set.has(nums[i])){
            return true
        }else{
            set.add(nums[i]);
        }
    }

    return false;
}


const result = containsDuplicate(numArr);
console.log(result);