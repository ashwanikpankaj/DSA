# DSA Pattern Recognition Handbook

> **Purpose:** This document is our living DSA pattern-recognition guide.
> After every completed topic, we will update this README with the new pattern,
> recognition clues, mental model, and representative problems.

---

## 🧭 How to Use This README

When seeing a new interview problem, do **not** immediately think about code.

Ask:

1. **What kind of data is involved?**
   - Array / String
   - Linked List
   - Tree
   - Heap
   - Graph
   - etc.

2. **What is the problem asking for?**
   - Pair / frequency / lookup
   - Contiguous range
   - Search
   - Minimum / maximum
   - Traversal
   - Ordering

3. **What property can I exploit?**
   - Previously seen values
   - Sorted order
   - Contiguous window
   - Two useful ends
   - Monotonic relationship
   - LIFO / FIFO
   - etc.

4. **What search space can I eliminate?**

The goal is:

> **Recognize the pattern first → derive the solution → then write code.**

---

# 1. Hashing

## 🎯 Recognition Clues

Think **Hashing** when you need:

- Fast lookup
- Frequency/count
- Duplicate detection
- "Have I seen this before?"
- Grouping based on values/features
- Mapping one value to another

### Typical Tools

```javascript
Map
Set
```

## 🧠 Mental Trigger

> **"I need to remember something I've already seen."**

## Representative Problems

- Two Sum
- Contains Duplicate
- Group Anagrams

## Pattern

```text
Current element
      ↓
Have I seen / stored something related?
      ↓
Yes → use stored information
No  → store current information
```

---

# 2. Two Pointers

## 🎯 Recognition Clues

Think **Two Pointers** when:

- Working with an array/string
- Especially when the array is sorted
- You need a pair
- You can reason from both ends
- You can eliminate part of the search space by moving pointers
- The left and right positions have useful information

### Typical Structure

```javascript
let left = 0;
let right = arr.length - 1;

while (left < right) {
    // ...
}
```

## 🧠 Mental Trigger

> **"I have two useful positions, and I can eliminate part of the search space by moving one or both pointers."**

## Representative Problems

- Valid Palindrome
- Two Sum II
- Container With Most Water
- 3Sum
- Trapping Rain Water

## Important Insight

Two pointers are not always simply:

```text
left → 
← right
```

The important idea is:

> **Use pointer movement to avoid repeatedly checking the same elements.**

---

# 3. Sliding Window

## 🎯 Recognition Clues

Think **Sliding Window** when you see:

- Subarray
- Substring
- Contiguous elements
- Longest / shortest
- Maximum / minimum
- A constraint involving `k`
- A range that grows and shrinks

The critical word is often:

> **Contiguous**

---

## 3.1 Fixed-Size Sliding Window

### Recognition

The window size is explicitly given.

Example:

```text
k = 3
```

### Mental Trigger

> **"The window size is fixed."**

### Representative Problem

- Maximum Number of Vowels in a Substring of Given Length

### Pattern

```text
Add right element
      ↓
If window becomes larger than k
      ↓
Remove left element
      ↓
Move right
```

---

## 3.2 Variable-Size Sliding Window

### Recognition

The window size is **not fixed**.

Instead, the window must satisfy a condition.

Typical clues:

- Longest valid substring
- Shortest valid subarray
- At most `k`
- At least `k`
- Window becomes invalid

### Mental Trigger

> **"Grow the window, and shrink it when it becomes invalid."**

### Representative Problems

- Longest Substring Without Repeating Characters
- Longest Repeating Character Replacement

### Core Pattern

```javascript
for (let right = 0; right < str.length; right++) {

    // Add right element

    while (windowIsInvalid) {
        // Remove left element
        left++;
    }

    // Update answer
}
```

### Important Distinction

```text
Fixed Window
→ Window size is given

Variable Window
→ Validity condition determines when to shrink
```

---

# 4. Binary Search

Binary Search has two major patterns we have learned.

---

## 4.1 Binary Search on Sorted Data

### Recognition Clues

- Sorted array
- Search for a target
- Find an index
- Find insertion position
- Find first / last occurrence
- Search space is ordered

### Mental Trigger

> **"The search space is ordered. Can I eliminate half of it?"**

### Typical Structure

```javascript
let left = 0;
let right = arr.length - 1;

while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    // Decide which half to eliminate
}
```

### Representative Problems

- Binary Search — LeetCode 704
- Search Insert Position — LeetCode 35
- Find First and Last Position — LeetCode 34
- Search in Rotated Sorted Array — LeetCode 33

---

## 4.2 Binary Search for First / Last Valid Answer

This is a special form of Binary Search on an ordered search space.

### First Occurrence

When the current answer is valid but we want an **earlier** answer:

```javascript
answer = mid;
right = mid - 1;
```

Mental model:

> **"I found an answer. Can I find a better one to the left?"**

### Last Occurrence

When we want a **later** answer:

```javascript
answer = mid;
left = mid + 1;
```

Mental model:

> **"I found an answer. Can I find a better one to the right?"**

---

# 5. Binary Search on the Answer

## ⭐ Major Pattern

This is different from searching an array.

We search a range of **possible answers**.

### Recognition Clues

Look for:

- Minimum / maximum answer
- Minimum speed
- Minimum capacity
- Minimum time
- Maximum allowed value
- "Can we finish within X?"
- "Can this value work?"
- A candidate answer can be tested
- If one candidate works, larger/smaller candidates consistently work

### Most Important Question

> **"If this candidate answer works, will the answers on one side also work?"**

If yes, we may have a **monotonic search space**.

---

## 🧠 Mental Trigger

> **"I'm not searching the array. I'm searching possible answers."**

### General Pattern

```text
Possible answers
      ↓
Try mid
      ↓
Feasibility check
      ↓
 ┌───────────────┐
 │               │
Works          Doesn't work
 │               │
Save answer     Eliminate invalid side
 │               │
Search LEFT     Search RIGHT
```

---

## Representative Problems

### Koko Eating Bananas

```text
Candidate = eating speed
Check = hours required
Goal = minimum speed
```

```text
speed works
    ↓
save speed
    ↓
try smaller speed
```

---

### Capacity To Ship Packages Within D Days

```text
Candidate = ship capacity
Check = days required
Goal = minimum capacity
```

```text
capacity works
    ↓
save capacity
    ↓
try smaller capacity
```

---

### Split Array Largest Sum

```text
Candidate = maximum allowed subarray sum
Check = number of subarrays required
Goal = minimum possible maximum sum
```

```text
maximum allowed sum works
    ↓
save it
    ↓
try smaller maximum sum
```

---

## 🔥 Common Skeleton

```javascript
let left = minimumPossibleAnswer;
let right = maximumPossibleAnswer;
let answer = right;

while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    const works = canSolve(mid);

    if (works) {
        answer = mid;
        right = mid - 1;
    } else {
        left = mid + 1;
    }
}

return answer;
```

### Golden Rule

> **Works → save it → search left for a smaller valid answer.**

> **Doesn't work → search right for a larger answer.**

---

# 🧠 Pattern Recognition Cheat Sheet

| Problem Clue | Think |
|---|---|
| "Have I seen this before?" | **Hashing** |
| Frequency / count | **Hashing** |
| Fast lookup | **Hashing** |
| Pair in sorted array | **Two Pointers** |
| Useful left and right ends | **Two Pointers** |
| Subarray / substring | **Sliding Window** |
| Contiguous + longest/shortest | **Sliding Window** |
| Fixed `k` range | **Fixed Sliding Window** |
| Window becomes invalid → shrink | **Variable Sliding Window** |
| Sorted array + target | **Binary Search** |
| First / last occurrence | **Binary Search** |
| Search space is ordered | **Binary Search** |
| Minimum / maximum + feasibility check | **Binary Search on Answer** |
| "Can this value work?" | **Binary Search on Answer** |
| Candidate works → try smaller | **Binary Search on Answer** |

---

# 🔥 Current Pattern Map

```text
                         DSA Problem
                              │
             ┌────────────────┼────────────────┐
             │                │                │
       Fast Lookup?     Contiguous Range?   Ordered Search?
             │                │                │
          Hashing       Sliding Window    Binary Search
             │                │                │
             │          ┌─────┴─────┐     ┌────┴─────────┐
             │          │           │     │              │
             │       Fixed       Variable  │         Search Answer
             │       Window      Window    │              │
             │                             │        Min/Max +
             │                        Search Data    Monotonic
             │
       "Have I seen it?"
```

---

# 📌 Problems Covered So Far

## Hashing
- [x] Two Sum
- [x] Contains Duplicate
- [x] Group Anagrams

## Two Pointers
- [x] Valid Palindrome
- [x] Two Sum II
- [x] Container With Most Water
- [x] 3Sum
- [x] Trapping Rain Water

## Sliding Window
- [x] Best Time to Buy and Sell Stock
- [x] Longest Substring Without Repeating Characters
- [x] Maximum Number of Vowels in a Substring of Given Length
- [x] Longest Repeating Character Replacement

## Binary Search
- [x] Binary Search — LC 704
- [x] Search Insert Position — LC 35
- [x] Find First and Last Position — LC 34
- [x] Search in Rotated Sorted Array — LC 33
- [x] Koko Eating Bananas — LC 875
- [x] Capacity To Ship Packages Within D Days — LC 1011
- [x] Split Array Largest Sum — LC 410

---

# 🔄 Revision Queue

These were intentionally moved to revision rather than counted as completed learning topics:

- Longest Consecutive Sequence
- Product of Array Except Self
- Valid Sudoku
- Merge Sorted Array

---

# 🚀 Next Topic

## Stack

Planned representative problems:

1. Valid Parentheses
2. Min Stack
3. Evaluate Reverse Polish Notation
4. Daily Temperatures
5. Car Fleet
6. Largest Rectangle in Histogram

After Stack:

```text
Stack
  ↓
Linked List
  ↓
Trees / Binary Trees
  ↓
Heap / Priority Queue
  ↓
Intervals
  ↓
Greedy
  ↓
Graphs
  ↓
Backtracking
  ↓
Dynamic Programming
```

---

# 📝 Update Rule

After completing every new DSA topic:

1. Add the new pattern to this README.
2. Add its recognition clues.
3. Add the mental trigger.
4. Add representative problems.
5. Add important patterns / variations.
6. Update the problem checklist.
7. Keep unresolved problems in the **Revision Queue**.

> **Goal: Build pattern recognition, not memorize solutions.**
