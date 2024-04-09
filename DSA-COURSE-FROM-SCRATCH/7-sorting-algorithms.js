// Note: In order to implement algorithms, you need the ability to observe

// ============= ELEMENTARY SORTING ALGORITHMS =================

// ============= selection sort =================
//  The algorithm here is to push the min val to the beginning of the arr by comparing adjacent element.
// run-time o(N^2) and o(1) space
function selectionSort(arr) {
  for (let i = 0; i <= arr.length - 2; i++) {
    let min = i;
    for (let j = i; j <= arr.length - 1; j++) {
      if (arr[min] > arr[j]) min = j;
    }
    [arr[min], arr[i]] = [arr[i], arr[min]]; // simply swap elements
  }
  return arr;
}

// console.log(selectionSort([13, 46, 24, 52, 20, 9]));

// ============= bubble sort =================
//  The algorithm here is push max value to end of arr by comparing adjacent elements.
// run-time o(N^2) and o(1) space
// The best case is o(N) for a sorted or nearly sorted array and still o(1) space
function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // simply swap elements
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([13, 46, 24, 52, 20, 9]));

// optimized bubble sort...
function bubbleSortOptimized(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // simply swap elements
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]));

// ============= insertion sort =================
//  The algorithm here is select element and place in correct order
function insertionSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]]; // simply swap elements
      }
    }
  }
  return arr;
}

// console.log(insertionSort([13, 46, 24, 52, 20, 9]));

// ============= Big-o of elementary SORTING ALGORITHMS =================
// space complexity: All have o(1) space.
// Time complexity:
// selection sort: o(n^2) - best case, o(n^2) - worst case, o(n^2) - average case.
// bubble sort: o(n) - best case, o(n^2) - worst case, o(n^2) - average case.
// insertion sort: o(n) best case, o(n^2) - worst case, o(n^2) - average case.

// ============= ADVANCED SORTING ALGORITHMS =================

// ============= Merge sort =================
// The merge sort algorithm is simply divide, sort and merge...that's all.

// now, let say we are given two sorted array. This is how we merge them.
function merge(arr1, arr2) {
  let left = 0;
  let right = 0;
  let res = [];
  while (left < arr1.length && right < arr2.length) {
    if (arr1[left] <= arr2[right]) {
      res.push(arr1[left]);
      left++;
    } else {
      res.push(arr2[right]);
      right++;
    }
  }
  while (left < arr1.length) {
    res.push(arr1[left]);
    left++;
  }
  while (right < arr2.length) {
    res.push(arr2[right]);
    right++;
  }
  return res;
}

// console.log(merge([1, 2, 3, 7, 8, 9], [2, 5, 6]));

function mergeSort(arr) {
  if (arr.length === 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

// console.log(mergeSort([5, 7, 8, 6, 9, 4, 3, 5, 2, 1]));
// Note: So, the run-time for merge sort is o(nlogn) and o(n) space.

// ============= Quick sort =================
// The quick sort algorithm is similar to the merge sort algorithm in a way.
// However, the algorithm here is to get a pivot/partitioning index, and put it in it's
// correct place by putting all the elements less than it to the left and the elements
// greater than it to the right of it.
// You do this recursively until all array are sorted.
function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotIdx = pivotHelper(arr, start, end);
    quickSort(arr, start, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, end);
  }
  return arr;
}

function pivotHelper(arr, left = 0, right = arr.length - 1) {
  let pivot = arr[left];
  let swapIdx = left;
  for (let i = left + 1; i <= right; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      [arr[swapIdx], arr[i]] = [arr[i], arr[swapIdx]];
    }
  }
  [arr[left], arr[swapIdx]] = [arr[swapIdx], arr[left]];
  return left;
}

// console.log(quickSort([13, 46, 24, 52, 20, 9]));
