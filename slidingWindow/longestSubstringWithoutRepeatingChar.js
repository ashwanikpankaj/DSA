// Problem Statement

// Given a string s, find the length of the longest substring without repeating characters.

// Return the length only.

// What is substring -> A continuous sequence of characters from a string.

const s = "abcabcbb";

function findLongestSubstring(str){
    const set = new Set();
    let left  =0;
    let right = 0;
    let n = str.length;
    let longestSub = 0

    while(right<n){
        // this should not be done since it will give zero bro!!! since at this substring size should be 1
        //longestSub = Math.max(longestSub, right-left); --> mistake
         if(!set.has(str[right])){
           set.add(str[right]);
           longestSub = Math.max(longestSub, right-left+1) // corrected one , we need to add +1 since both left and right is included
           right++;
         }else{
            while(set.has(str[right])){
                 set.delete(str[left]);
                 left++
            }
         }
    }

    return longestSub
}

console.log(findLongestSubstring(s))



function longestSubstringOptimized(str) {
    const lastSeen = new Map();

    let left = 0;
    let longest = 0;

    for (let right = 0; right < str.length; right++) {

        const ch = str[right];

        // If we've seen this character inside the current window,
        // move left just after its previous occurrence.
        if (lastSeen.has(ch)) {
            left = Math.max(left, lastSeen.get(ch) + 1);
        }

        // Update the answer
        longest = Math.max(longest, right - left + 1);

        // Remember the latest index of this character
        lastSeen.set(ch, right);
    }

    return longest;
}