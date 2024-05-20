// ============= BINARY HEAPS =================

// === what is a binary heap? ===
// Heap is a tree structure very similar to Binary Search Trees(BST) but with some different rules.

// We have:
// 1. MaxBinaryHeap: In this type of heap, the parent nodes are always larger than the child nodes.
// 2. MinBinaryHeap: In this type of heap, the child nodes are always larger than the parent nodes.

// Note: Just like in BST, each nodes can have at MOST two children....but it's important to note
// that there is NO order here...in the sense that you can place the bigger node to the left...and
// vise-versa.

// Note: A binary heap is as compact as possible. All the children of each node are as full as they
// can be and left children are filled out first.

// Important:
// 1. Heaps are used to implement priority queues, which are very commonly used data structures.
// 2. Heaps are also used quite a bit, with graph traversal algorithms.

// === ways of storing heaps ===
// 1. using the class method.
// 2. using a list/Array - Easy way actually.

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    let element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }
  //   extract max
}

let heap = new MaxBinaryHeap();
heap.insert(55);
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
console.log(heap);
