// find the count of occurence of anagram in a given string , whose pattern is given

// naive approach
// 1. objMaker function => it will generate the key as letter and value as no of its occurence;

// function objMaker(str) {
//     let i = 0;
//     let obj = {};
//     while (i < str.length) {
//       if (obj[str[i]]) {
//         obj[str[i]] = obj[str[i]] + 1;
//       } else {
//         obj[str[i]] = 1;
//       }
//       i++;
//     }
//     return obj;
//   }
//2. use objMaker function to make the object for pattern

//3. traverse the two for loop and in the second loop traverse j -> i to j < pattern.length+i;
//4 use objMaker function in second loop to make object of same pattern lenght string;
//5. come out of j loop and use forIn loop over pattern object and j loop object and see if every count is same => increase the count

//function checkAnagram(str, str1) {
//     let obj1 = objMaker(str);
//     let obj2 = objMaker(str1);
//     let flag = true;
//     for (key in obj1) {
//       if (obj1[key] !== obj2[key]) {
//         flag = false;
//       }
//     }
//     return flag;
//   }

const str = "aabaabaa";
const pattern = "aaba";
// answer output should be 4
// const str = "forfoxforrof";
// const pattern = "rof";

function objMaker(str) {
  let i = 0;
  let obj = {};
  while (i < str.length) {
    if (obj[str[i]]) {
      obj[str[i]] = obj[str[i]] + 1;
    } else {
      obj[str[i]] = 1;
    }
    i++;
  }
  return obj;
}

function countAnagramOccurence(string, pattern) {
  const patternObj = objMaker(pattern);
  let distinctLetterSize = Object.keys(patternObj).length;
  let ans = 0;
  let k = pattern.length;
  let i = 0;
  let j = 0;

  while (j < string.length) {
    // if the letter is present in the pattern object decrease it by 1
    if (patternObj.hasOwnProperty(string[j])) {
      patternObj[string[j]] = patternObj[string[j]] - 1;
    }

    // when that key has value equals to 0 ; then decrease the distinct count letter since that letter is whole coverd in str traverse
    if (patternObj[string[j]] === 0) {
      distinctLetterSize = distinctLetterSize - 1;
    }
    // here when it hits the window size
    if (j - i + 1 < k) {
      j++;
    } else if (j - i + 1 === k) {
      // do all the calcualtions
      if (distinctLetterSize === 0) {
        ans += 1;
      }
      // time to slide the window
      if (patternObj.hasOwnProperty(string[i])) {
        // during sliding the window we are increasing the i and because of that we are putting back that letter in the map
        patternObj[string[i]] = patternObj[string[i]] + 1;
        // condition here since we need to increase the distinct count only when count ===1 because
        // otherwise that letter might already present with no zero value
        if (patternObj[string[j]] === 1) {
          distinctLetterSize += 1;
        }
      }
      i++;
      j++;
    }
  }
  return ans;
}

console.log(countAnagramOccurence(str, pattern));
