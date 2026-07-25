// Problem: Maximum Number of Vowels in a Substring of Given Length
// s = "abciiidef"
// k = 3

const s = "abciiidef";

function maxNumberOfVowels(str, windowSize){
 const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
 let maxVowelCount = 0;
 let currentVowelCount = 0;
  let left =0;
  let right = 0

  while(right < str.length){
      if(right-left+1 > windowSize){
          if(vowels.has(str[left])){
            currentVowelCount--;
        }
          left++;
      
    }

    if(vowels.has(str[right])){
         currentVowelCount += 1;
         maxVowelCount = Math.max(maxVowelCount, currentVowelCount)
    }

  
    right++;
  }

  return maxVowelCount
}

console.log(maxNumberOfVowels("baei", 3));