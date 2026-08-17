// Problem

// Given a string containing:
//( ) [ ] { }
// Return true if the brackets are valid.

function isValidParenthesis(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    const el = str[i];

    // Opening bracket → push into stack
    if (el === "(" || el === "[" || el === "{") {
      stack.push(el);
    } 
    // Closing bracket
    else {
      const lastElOfStack = stack[stack.length - 1];

      if (
        (el === ")" && lastElOfStack === "(") ||
        (el === "]" && lastElOfStack === "[") ||
        (el === "}" && lastElOfStack === "{")
      ) {
        stack.pop();
      } else {
        // Closing bracket doesn't match the top
        return false;
      }
    }
  }

  // Valid only if nothing is left open
  return stack.length === 0;
}

console.log(isValidParenthesis("()"));     // true
console.log(isValidParenthesis("()[]{}")); // true
console.log(isValidParenthesis("([{}])")); // true
console.log(isValidParenthesis("(]"));     // false
console.log(isValidParenthesis("([)]"));   // false
console.log(isValidParenthesis("]"));      // false