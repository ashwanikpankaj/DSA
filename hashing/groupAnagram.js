// Group anagram

const stringArr = ["eat","tea","tan","ate","nat","bat"];

function groupAnagram(strs){
   const result  = []
 const map = new Map();

 for(let i = 0; i < strs.length; i++){
    const sortedStr = strs[i].split("").sort().join("");
    if(map.has(sortedStr)){
      const value = map.get(sortedStr);
      value.push(strs[i])
    }else{
      map.set(sortedStr, [strs[i]])
    }
 }

  // for(const [key, value] of map){
  //   result.push(value)
  // }
  // console.log(result)

  return Array.from(map.values())
}

// const hi  = groupAnagram(stringArr);
// console.log(hi)

// Sorting the array of n elements → O(n log n)
// Sorting each string of length k across n strings → O(n × k log k)

// Optimized approach


// Time complexity = n*k(k is length of string)
function groupAnagram2(strs){
 const map = new Map();

 for(const str of strs){
  const count = new Array(26).fill(0);

  for(const char of str){
    count[char.charCodeAt(0)-97]++;
  }
  const key = count.join("#")
  if(!map.has(key)){
    map.set(key,[])
  }
  map.get(key).push(str)
 }

 return [...map.values()]
}

const result = groupAnagram2(stringArr);
console.log(result)