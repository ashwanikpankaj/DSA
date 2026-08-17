// Problem

// Design a stack that supports

// Design a stack that supports:

// push(x)
// pop()
// top()
// getMin()

class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(el) {
    this.stack.push(el);

    // If minStack is empty, el is the minimum.
    // Otherwise store whichever is smaller:
    // current element OR previous minimum.
    if (this.minStack.length === 0) {
      this.minStack.push(el);
    } else {
      const currentMin = this.minStack[this.minStack.length - 1];
      this.minStack.push(Math.min(el, currentMin));
    }
  }

  pop() {
    this.minStack.pop();
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}

const stack = new MinStack();

stack.push(4);
stack.push(4);
stack.push(5);
stack.push(-1);

console.log(stack.getMin()); // -1

stack.pop();

console.log(stack.getMin()); // 4
console.log(stack.top());    // 5

stack.pop();

console.log(stack.getMin()); // 4