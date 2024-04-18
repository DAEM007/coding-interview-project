// ============= SINGLY LINKED LIST =================

// === what is a singly linked list? ===
// A linked list is a data structure that contains a head, tail and length property.
// Linked list consists of nodes, and each node has a value and a pointer to
// another node or null.

// Note: It's different from an array that has elements mapped to a particular index...
// Here, we are dealing with nodes(akin to elements in an array) and we are not mapping to
// any index, rather what we have is like a train of cars(nodes) connected to each other.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let curr = this.head;
    let prev = curr;
    while (curr.next) {
      prev = curr;
      curr = curr.next;
    }
    this.tail = prev;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return curr;
  }
  shift() {
    if (!this.head) return undefined;
    let curr = this.head;
    this.head = curr.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return curr;
  }
  unshift(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index > this.length - 1) return null;
    let counter = 0;
    let curr = this.head;
    while (counter !== index) {
      curr = curr.next;
      counter++;
    }
    return curr;
  }
  set(index, val) {
    let node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(index, val) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length - 1) return !!this.push(val);
    let node = new Node(val);
    let prev = this.get(index - 1);
    let temp = prev.next;
    prev.next = node;
    node.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length - 1) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }
  reverse() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }
  print() {
    let arr = [];
    let curr = this.head;
    while (curr) {
      arr.push(curr.val);
      curr = curr.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
// list.push(1);
// list.push(2);
// list.push(3);
// list.push(4);
// console.log(list);
