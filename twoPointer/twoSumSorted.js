const numbers = [2, 7, 11, 15];
const tar = 9;

function targetSum(nums, target){
    let i = 0;
    let j = nums.length-1;

    while(i < j){
        const sum = nums[i] + nums[j];

        if(sum> target){
            j--
        }else if(sum < target){
            i++
        }else if(sum === target){
            return [i+1,j+1]
        }
    }

    return [];
}

const result = targetSum(numbers,tar);
console.log(result)