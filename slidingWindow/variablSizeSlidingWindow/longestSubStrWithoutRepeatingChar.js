// find the longest substring without repeating the characters

const string = "pwwkewe";
//answer = 3 length of the string with the longest substring of unique char

// main issue is how to find the condition => for applying the condition in sliding window
//
function longesSubStringWihUniqChar(str) {
  const map = new Map();
  let max = 0;
  let i = 0;
  let j = 0;
  while (j < str.length) {
    if (map.has(str[j])) {
      const value = map.get(str[j]) + 1;
      map.set(str[j], value);
    } else {
      map.set(str[j], 1);
    }
    if (map.size < j - i + 1) {
      // here what is happening that map size is less and window size became greater this
      // means that some character in the map got repeated
      // so we will have to remove that  character from the start till map size equals the window size
      while (map.size < j - i + 1) {
        map.set(str[i], map.get(str[i]) - 1);
        if (map.get(str[i]) === 0) {
          map.delete(str[i]);
        }
        i++;
      }
      j++;
    } else if (map.size === j - i + 1) {
      // here we will get the ans just find the maximum size
      max = Math.max(max, j - i + 1);
      j++;
    }
  }
  return max;
}
console.log(longesSubStringWihUniqChar(string));
