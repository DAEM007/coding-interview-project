// ============= PROBLEM SOLVING PATTERNS =================

// ==== Sliding window pattern =====

// challenge: write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

// pseudocode for naive solution with o(N^2) run-time
// 1. check if the num > arr.length, if it is return null.
// 2. create a variable called max to keep track of the maximum.
// 3. create a variable called temp to compare with the max variable
// 4. For the outer loop, iterate through the array of numbers up ensuring you don't go out of bounds.
        // and initialize temp to zero
// 5. For the inner loop, iterate through up until the num and update the temp variable.
// 6. compare temp with max.
// 7. Return max.

// solution with o(N^2) run-time...
function maxSubarraySum (arr, num) {
    if(num > arr.length) return null;
    let max = 0;
    let temp;
    for(let i = 0; i < arr.length - num + 1; i++) {
        temp = 0;
        for(let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        max = Math.max(temp, max);
        // console.log(temp, max);
    }
    return max;
};

// pseudocode for the sliding window with o(N) run-time
// 1. check if the num > arr.length, if it is return null.
// 2. create a variable called max to keep track of the max.
// 3. create a variable called temp and initialize to zero
// 4. For the first loop iterate through the array up until less than the num
    // update the max variable
// 5. set temp = max
// 6. For the second loop iterate through the array starting from num up until the end of the array
    // update the temp variable by sliding the window...sliding the window is as shown in the code
    // compare temp and max
// 7. return max


// solution with sliding window - o(N) run-time
function maxSubarraySumRefactor (arr, num) {
    if(num > arr.length) return null;
    let max = 0;
    let temp = 0;
    for(let i = 0; i < num; i++) {
        max += arr[i];
    }
    temp = max;
    // console.log(temp, max);
    for(let i = num; i < arr.length; i++) {
        temp = temp - arr[i - num] + arr[i];
        max = Math.max(temp, max);
        // console.log(temp, max);
    }
    return max;
};

// console.log(maxSubarraySum([1,2,5,2,8,1,5], 2));
// console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));
// console.log(maxSubarraySum([4,2,1,6], 1));
// console.log(maxSubarraySum([4,2,1,6,2], 4));
// console.log(maxSubarraySum([], 4));
// console.log(maxSubarraySumRefactor([1,2,5,2,8,1,5], 2));
// console.log(maxSubarraySumRefactor([1,2,5,2,8,1,5], 4));
// console.log(maxSubarraySumRefactor([4,2,1,6], 1));
// console.log(maxSubarraySumRefactor([4,2,1,6,2], 4));
// console.log(maxSubarraySumRefactor([], 4));