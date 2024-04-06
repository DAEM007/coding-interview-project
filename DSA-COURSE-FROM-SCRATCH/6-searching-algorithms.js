// ============= SEARCHING ALGORITHMS =================

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

console.log(linearSearch([12, 3, 4, 5, 6, 7, 8, 9], 5));
console.log(linearSearch([12, 3, 4, 5, 6, 7, 8, 9], 15));
