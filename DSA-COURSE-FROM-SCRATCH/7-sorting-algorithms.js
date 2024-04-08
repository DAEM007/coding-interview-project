// Note: In order to implement algorithms, you need the ability to observe

// ============= SORTING ALGORITHMS =================

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
function bubbleSort(arr) {
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

// console.log(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]));

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

console.log(insertionSort([13, 46, 24, 52, 20, 9]));
