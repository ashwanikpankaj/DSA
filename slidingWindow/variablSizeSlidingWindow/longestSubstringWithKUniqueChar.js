// find the longest substring with the k unique characters

// note substring and subarray are continous

var string = "aabacbebebe";
var k = 3;

// answer output will be 7

function objMaker(str) {
  let obj = {};
  let j = 0;
  while (j < str.length) {
    if (obj[str[j]]) {
      obj[str[j]] = obj[str[j]] + 1;
    } else {
      obj[str[j]] = 1;
    }
    j++;
  }
  return obj;
}

function longestSubStringOfUniqueCharOfKSize(str, k) {
  let i = 0;
  let j = 0;
  let map = new Map();
  let max = 0;
  while (j < str.length) {
    if (map.has(str[j])) {
      // if the character is already is present incerment by 1
      const value = map.get(str[j]);
      map.set(str[j], value + 1);
    } else {
      // if character is not present then give that value 1
      map.set(str[j], 1);
    }
    if (map.size < k) {
      j++;
    } else if (map.size === k) {
      // get the maximum length of string with that number of unique characters
      max = Math.max(max, j - i + 1);
      j++;
    } else if (map.size > k) {
      // here all the caculatons will come for sliding the window
      while (map.size > k) {
        // here when size of the map is greater than the condition
        // then in that case run the loop till size becomes lesser than condition,
        // and if it reaches to zero then delete that key from the map
        map.set(str[i], map.get(str[i]) - 1);
        if (map.get(str[i]) === 0) {
          map.delete(str[i]);
        }
        i++;
      }
      j++;
    }
  }
  return max;
}

console.log(longestSubStringOfUniqueCharOfKSize(string, k));

// const map = new Map();
// map.set("hello", 1);
// map.set("new", 2);
// console.log(map.get("hello"));
// console.log(map.has("newd"), map.size);
// console.log(map.delete("new"), map.has("new"));

// for ([key, value] of map) {
//   console.log({ key, value });
// }
