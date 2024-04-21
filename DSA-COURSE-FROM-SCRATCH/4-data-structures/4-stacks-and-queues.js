// ============= STACKS AND QUEUES =================

// stacks and queues are both for data collection. They both principles of operations guiding them.

// === what is a stack? ===
// A stack data structure operates on the principle of last-in first-out (LIFO) / or first-in last-out (FILO)
// principle.

// === where are stacks used? ===
// 1. used to manage function invocations like in recursion.
// 2. used in undo and redo operations.
// 3. used to handle routing (the history object).

// === ways to implement a stack ===
// 1. Array implementation.
// 2. Linked List implementation.

// Note: some languages come with their own stack data type. However, JavaScript does Not...but we can
// use some of JavaScript built-in function to implement a stack.

// 1. The array implementation is quite straight forward...cos using the (push and pop / unshift and shift)
// in tandem in the array can easily do the implementation of a stack data structure.
// Note: one thing you must keep in mind here is that in terms of big-o notation arrays would NOT be a good
// idea for the stacks implementation because of cascading / re-indexing which affects the time
// complexity...for this reason we would be considering our next method of implementing a stack...which is
// by using a linked list.

// 2. So for the linked list implementation we would be using a singly linked list. You can use a doubly
// linked list if you want though.

// Note: You might be thinking why not just use the push and pop from the linked list we already created
// right...Yeah...but not so fast...observe that the pop implementation in the singly linked list used a
// loop that run at linear o(N) time and that's not what we want for our linked list implementation...so
// agin we observe that shift and unshift was done at constant o(1) time in our linked list. Hence,
// we use that.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      let temp = this.first;
      node.next = temp;
      this.first = node;
    }
    this.size++;
    return this.size;
  }
  pop() {
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp;
  }
}

let stack = new Stack();
// console.log(stack);
