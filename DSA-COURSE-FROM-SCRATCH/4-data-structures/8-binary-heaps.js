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
  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
  sinkDown() {
    let idx = 0;
    let element = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < this.values.length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < this.values.length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
console.log(heap);
