// === what is a queue? ===
// A queue data structure operates on the principle of last-in last-out (LILO) / or first-in first-out (FIFO)
// principle.

// === where are queues used? ===
// 1. used in game programming...for instance you are about to join an online game with other users...there's
// some kind of data structure used to keep track of who got to the queue first (first-in) and that's who
// we add to the game first (first-out).
// 2. Background tasks.
// 3. uploading or downloading something.
// 4. Printing / task processing.

// === ways to implement a queue ===
// 1. Array implementation.
// 2. Linked List implementation.

// Note: some languages come with their own queue data type. However, JavaScript does Not...but we can
// use some of JavaScript built-in function to implement a stack.

// 1. The array implementation just like for stacks is quite straight forward using the
// unshift and pop / push and shift.
// Note: Just like stacks, implementing queues with array can affect the time complexity (making it linear)
// and to solve this issue it's always good to implement your queue especially in interviews...as an after
// optimization / refactor when you have implemented the array method and explain why you are doing so
// ...this leaves a good impression on your interviewer.

// 2. so we would be using the push and shift from the linked list to implement our queue data structure.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let node = new Node(val);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }
  dequeue() {
    let temp = this.first;
    if (this.size === 0) return null;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let queue = new Queue();
// console.log(queue);
