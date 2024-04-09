// ============= PROBLEM SOLVING PATTERNS =================

// ==== multiple pointers pattern =====

// challenge: write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is zero(0). Return an array that includes both values that sum to zero or undefined if a pair does not exist.

// naive-solution with run-time of o(N^2)
function sumZero(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i+1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            if(sum  === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
};

// multiple-pointer solution with run-time of o(N)
function sumZeroRefactored(arr) {
    let left = 0;
    let right = arr.length - 1;
    while(left < right) {
        let sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        }else if(sum < 0) {
            left++;
        } else {
            right--;
        }
    }
};

// console.log(sumZero([-3,-2,-1,0,1,2,3]));
// console.log(sumZero([1,2,3]));
// console.log(sumZeroRefactored([-3,-2,-1,0,1,2,3]));
// console.log(sumZeroRefactored([1,2,3]));

// challenge: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative values in the array, but it will always be sorted.

// so here are my thought process for this question...checkout the psuedocode below:
// Pseudocode
// 1. Have two-pointers left and right that...where left is slower than right.
// 2. Have a total variable to track unique values.
// 3. compare the right and left pointers: 
        // a. If the right pointer is equal to the left pointer...move the right pointer to the right
        // b. If the right pointer is NOT equal to the left pointer...update the total value...and set left pointer to be equals right pointer.
// 4. Return total.

// multiple-pointer solution with run-time of o(N)
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    let left = 0;
    let right = left + 1;
    let total = 1;
    while(left < right && right < arr.length) {
        if(arr[right] === arr[left]) {
            right++;
        } 
        if(arr[right] !== arr[left]){
            total++;
            left = right;
            right++;
        }
    }
    return total;
};

// OR, a refactored solution would be...
function countUniqueValuesRefactored(arr) {
    if(arr.length === 0) return 0;
    let left = 0;
    let right = left + 1;
    let total = 1;
    while(left < right && right < arr.length) {
        if(arr[right] !== arr[left]){
            total++;
            left = right;
        }
        right++;
    }
    return total;
};

// Again, we could also do this:
function countUniqueValuesRefactoredAgain(arr) {
    if(arr.length === 0) return 0;
    let left = 0;
    for(let right = 1; right < arr.length; right++) {
        if(arr[left] !== arr[right]) {
            left++;
            arr[left] = arr[right];
        }
    }
    return left + 1;
};

// console.log(countUniqueValues([1,1,1,1,1,2]));
// console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
// console.log(countUniqueValues([]));
// console.log(countUniqueValues([-2,-1,-1,0,1]));
// console.log(countUniqueValuesRefactored([1,1,1,1,1,2]));
// console.log(countUniqueValuesRefactored([1,2,3,4,4,4,7,7,12,12,13]));
// console.log(countUniqueValuesRefactored([]));
// console.log(countUniqueValuesRefactored([-2,-1,-1,0,1]));
// console.log(countUniqueValuesRefactoredAgain([1,1,1,1,1,2]));
// console.log(countUniqueValuesRefactoredAgain([1,2,3,4,4,4,7,7,12,12,13]));
// console.log(countUniqueValuesRefactoredAgain([]));
// console.log(countUniqueValuesRefactoredAgain([-2,-1,-1,0,1]));