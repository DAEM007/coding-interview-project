// ============= BINARY SEARCH TREES =================

// === what is a  tree? ===

// A tree is a data structure that consist of nodes in a parent-child relationship.

// Note: one difference between list and trees is that: list are linear just as we saw in the linked list
// chapter but trees on the other-hand are non-linear.

// Note: A singly linked list can be a special case of a tree.

// ====== common tree terminologies ======

// 1. Root: A top node in a tree.

// 2. Child: A node directly connected to another node.

// 3. Parent: A converse notion of a child (meaning that, it's same with the child but a reversed case).

// 4. Siblings: A group of nodes with same parent.

// 5. Leaf: A node with no child.

// 6. Edge: connection between one node and another.

// ====== Real-world application of trees =======

// 1. Html DOM.

// 2. Network routing.

// 3. Abstract syntax tree.

// 4. Artificial intelligence.

// 5. Folders in an operating system.

// 6. computer file systems.

// 7. JSON.

// ==== Kinds of trees ====

// There are a lot of trees but we would be focusing on:

// 1. Trees - each nodes can have as many children as possible.

// 2. Binary Trees - each nodes can have at most two (binary) children.

// 3. Binary search Trees (BST) - This is a special case of a binary tree...more importantly they are sorted in a particular way...actually in an ordered way.

// ==== Binary search trees - deep dive ====

// Binary search trees are sorted such that... every node to the left of the parent node is always less than the parent...while every node to the right of the parent node is greater than the parent.

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(val) {
    let newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        // this handles duplicates...unless you get into an infinite loop
        if (val === current.val) return undefined;
        if (val < current.val) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (val > current.val) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (val === current.val) {
        found = true;
      } else if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      }
    }
    return found;
  }
}

let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(13);
// tree.insert(11);
// tree.insert(2);
// tree.insert(16);
// tree.insert(7);
// console.log(tree);
// console.log(tree.find(11));
