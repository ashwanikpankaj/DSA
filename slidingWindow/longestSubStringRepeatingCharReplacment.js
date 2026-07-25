// Problem Statement

// You are given a string s consisting of only uppercase English letters and an integer k.

// You can choose at most k characters in the string and change them to any other uppercase English letter.

// Return the length of the longest substring that can be made to contain only one repeating character after performing at most k replacements.
// Input:
// s = "ABAB"
// k = 2

// Output: 4

function characterReplacement(str, k) {
  const freq = new Map();
  let left = 0;
  let maxFreq = 0;
  let maxLength = 0;

  for (let right = 0; right < str.length; right++) {
    const ch = str[right];
    freq.set(ch, (freq.get(ch) || 0) + 1);

    maxFreq = Math.max(maxFreq, freq.get(ch));
    const windowSize = right - left + 1;

    if (windowSize - maxFreq > k) {
      const leftChar = str[left];
      freq.set(leftChar, freq.get(leftChar) - 1);
      left++;
    } 
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

const s = "ABAB";
console.log(characterReplacement(s, 2));
