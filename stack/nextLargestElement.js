// find the next largest element
// that is also known as nearest greater element to right

const array = [1, 3, 2, 4];
//ans = [3,4,4,-1]

function bruteForceApproach(arr) {
  const ans = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = i + 1; j < arr.length; j++) {
      // here we can see that j is dependent on the i and it is array then think about stack approach
      if (arr[j] > arr[i]) {
        ans.push(arr[j]);
        flag = true;
        break;
      }
    }
    if (!flag) {
      ans.push(-1);
    }
  }
  return ans;
}
console.log(bruteForceApproach(array));
// time complexity O(n2)

/**
 * The function `getNextLargestElement` takes an array as input and returns a new array where each
 * element is the next largest element in the input array.
 * @param arr - The `arr` parameter is an array of numbers.
 * @returns an array containing the next largest element for each element in the input array.
 */
function getNextLargestElement(arr) {
  const ans = [];
  const stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // first step is check stack is empty just push -1
    if (stack.length === 0) {
      ans.push(-1);
    } else if (stack.length > 0 && stack[stack.length - 1] > arr[i]) {
      // in this case if stack top is greater than at that time index of i means we have found
      // the greater element, just push top element of the stack to ans array
      ans.push(stack[stack.length - 1]);
    } else if (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
      // in this case top element of stack is not greater to the arr element index at that time of i
      // so to get the greater element run while loop until we get the larger element
      while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.push(-1);
      } else {
        ans.push(stack[stack.length - 1]);
      }
    }
    stack.push(arr[i]);
  }
  return ans.reverse();
}

console.log(getNextLargestElement(array));
