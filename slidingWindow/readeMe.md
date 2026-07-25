Pattern #2 Complete ✅

You now know two sliding window patterns:

1. Variable Size Window

Examples:

Longest Substring Without Repeating Characters
Longest Repeating Character Replacement
Minimum Window Substring

Pattern:

Expand right

while (condition is invalid) {
    shrink left
}

update answer
2. Fixed Size Window

Examples:

Maximum Number of Vowels
Maximum Sum Subarray of Size K
Find All Anagrams
Maximum Average Subarray

Pattern:

Expand right

if (window size === k) {
    update answer

    remove left contribution

    left++
}