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
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (this.length === 0) return undefined;
    let poppedNode = this.tail;
    this.tail = poppedNode.prev;
    this.tail.next = null;
    poppedNode.prev = null;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return poppedNode;
  }
}

let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
console.log(list);
console.log(list.pop());
console.log(list);
