// first check angaram for simple question
// definition of anagram : two string given for comparison has same length and the occurence of each letter
// will be also same

const str = "ashwani";
const str1 = "pankaj1";

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

function checkAnagram(str, str1) {
  let obj1 = objMaker(str);
  let obj2 = objMaker(str1);
  let flag = true;
  for (key in obj1) {
    if (obj1[key] !== obj2[key]) {
      flag = false;
    }
  }
  return flag;
}
console.log(checkAnagram(str, str1));
