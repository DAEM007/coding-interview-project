// ============= DOUBLY LINKED LIST =================

// === what is a doubly linked list? ===
// It is almost identical to a singly linked-list only that...here each node has another pointer to the
// previous node.
// In comparison to singly-linked list. It takes up more memory.
// It's almost like a trade off...More memory === more flexibility

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = null;
  }
}
