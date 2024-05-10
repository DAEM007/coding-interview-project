// ============= BINARY TREE TRAVERSAL =================

// === Ways to traverse a tree ===

// 1. Breadth-first search (BFS) - traversing horizontally as in breadth.

// 2. Depth-first search (DFS) - traversing vertically as in depth...it's important to note that there are
// three orders for this kind of search....they are as follows:
// i. In-order
// ii. Pre-order
// iii. post-order

// ===== BFS implementation =====
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
  BFS() {
    let queue = [];
    let data = [];
    let node = this.root;
    queue.push(node);
    while (queue.length !== 0) {
      node = queue.shift();
      data.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }
  DFSPreorder() {
    let data = [];
    function traverse(node) {
      data.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      return;
    }
    traverse(this.root);
    return data;
  }
  DFSPostorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.val);
      return;
    }
    traverse(this.root);
    return data;
  }
  DFSInorder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.val);
      if (node.right) traverse(node.right);
      return;
    }
    traverse(this.root);
    return data;
  }
}

// Note: So, when you want to decide which to use between DFS and BFS...notice that it actually depends on
// the scenerio...so our particular concern is space and not time cos they both take same amount of time.
// So, In Summary, when you have a really wide tree...you want to consider a DFS as it would take up less
// space in memory compared to a BFS...BUT when we have a long height tree...you want to consider a
// BFS as it would take up less time in memory than DFS.

let tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// console.log(tree.BFS());
// console.log(tree.DFSPreorder());
// console.log(tree.DFSPostorder());
// console.log(tree.DFSInorder());
