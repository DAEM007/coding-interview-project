// ============= PROBLEM SOLVING PATTERNS =================

// ==== Divide and conquer pattern ====

// Read more about divide and conquer patttern.

// Binary search, Binary search trees, Quick sort, merge sort etc are examples of divide and conquer patterns.

// challenge: Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value id not found, return -1.

// Pseudocode for naive solution below with o(N) run-time
// iterate through the array
// compare each element to the val
// if: 
    // arr[i] === val, return i,
// return -1;

function search (arr, val) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
};

// Pseudocode for optimal solution below with logN run-time
// sort the array
// create 2 pointers called left and right to keep track of the first and last element in the array
// while left <= right:
    // create a middle index variable that divides the array/subarray into two
    // check if the val is less than the middle element, update the right pointer to middle index - 1;
    // check if the val is greater than the middle element, update the left pointer to middle index + 1;
    // else: return the middle element cos the last case would be that the val === middle
// return -1;

function searchRefactor(arr, val) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        if(val === arr[middle]) {
            return middle;
        } else if(val > arr[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
};


// console.log(search([2, 3, 4, 5, 7, 7, 8, 9], 3));
// console.log(search([20, 30, 40, 50,70, 80, 90], 70));
// console.log(search([20, 30, 40, 50,70, 80, 90], 100));
// console.log(searchRefactor([2, 3, 4, 5, 7, 7, 8, 9], 3));
// console.log(searchRefactor([20, 30, 40, 50,70, 80, 90], 70));
// console.log(searchRefactor([20, 30, 40, 50,70, 80, 90], 100));

