// ============= SEARCHING ALGORITHMS =================

// ============= linear search =================

// challenge: write a function that takes in an array and a value and returns the index of the value if found in the array, otherwise return -1.
// o(N) run-time and o(1) space
function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// console.log(linearSearch([12, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(linearSearch([12, 3, 4, 5, 6, 7, 8, 9], 15));

// ============= binary search =================

// Note: Binary search works on sorted arrays.
// o(logN) run-time and o(1) space
function binarySearch(arr, val) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) return middle;
    if (arr[middle] > val) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return -1;
}

// console.log(binarySearch([12, 3, 4, 5, 6, 7, 8, 9], 5));
// console.log(binarySearch([12, 3, 4, 5, 6, 7, 8, 9], 15));
