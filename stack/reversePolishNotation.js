// This is a pure Stack problem

// Problem

// Given:tokens = ["2", "1", "+", "3", "*"]

// This represents:(2 + 1) * 3

// Answer: 9

//Note: It can have addition, subraction, division and multiplication

function getOperatorIntention(operator, el1, el2) {
  switch (operator) {
    case "+":
      return el1 + el2;

    case "-":
      return el1 - el2;

    case "*":
      return el1 * el2;

    case "/":
      return Math.trunc(el1 / el2);
  }
}

function reversePolishNotation(arr) {
  const stackArr = [];
  const operatorSet = new Set(["+", "/", "-", "*"]);

  for (let i = 0; i < arr.length; i++) {
    if (!operatorSet.has(arr[i])) {
      stackArr.push(Number(arr[i]));
    } else {
      const el1 = stackArr.pop(); // second operand
      const el2 = stackArr.pop(); // first operand

      const cal = getOperatorIntention(arr[i], el2, el1);

      stackArr.push(cal);
    }
  }

  return stackArr[0];
}

const arr = ["2", "1", "+", "3", "*"];

console.log(reversePolishNotation(arr)); // 9