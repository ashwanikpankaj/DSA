//PS => John visiting the mall and ask his mom to buy toy for him.Since one conditon
// that toys are kept in one line and he will have to pick one by one , means you cant skip the
// the continuity of toy keeping. But you can take only two type of toys but its quantity can be anything

// answer he will try to get maximum no of toys of two type

const toy = "abaccab"; // string of toys
// k conditon is = 2
//output = 'acca' => a->2,c->2 // length will be 4 => largest substring nikalna hai

function maximumNoOfToys(str, k) {
  let max = 0;
  let i = 0;
  let j = 0;
  const map = new Map();
  while (j < str.length) {
    if (map.has(str[j])) {
      const value = map.get(str[j]) + 1;
      map.set(str[j], value);
    } else {
      map.set(str[j], 1);
    }
    // map has been made for toy and its frequecny
    if (map.size < k) {
      j++;
    } else if (map.size === k) {
      max = Math.max(max, j - i + 1);
      j++;
    } else if (map.size > k) {
      // do all the calculations for sliding the window
      while (map.size > k) {
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
console.log(maximumNoOfToys(toy, 2));
