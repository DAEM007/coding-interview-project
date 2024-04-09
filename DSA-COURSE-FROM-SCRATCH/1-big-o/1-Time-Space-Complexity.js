// =============== DSA-COURSE-FROM-SCRATCH  ===================

// ============== Time-complexity =============================

// challenge: Given a number n, write a function that takes in n as an input and prints the pairs of number from (0,0) up until (n,n).
function printAllPairs(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(`(${i},${j})`);
        }
    }
}

// run-time of o(n^2)
// console.log(printAllPairs(6));

// challenge: Print at least 5
function logAtLeast(n) {
    for (let i = 0; i < Math.max(5, n); i++) {
        console.log(i);
    }
}

// run-time of o(n)
// console.log(logAtLeast(10)); 

// challenge: Print at most 5
function logAtMost(n) {
    for (let i = 0; i < Math.min(5, n); i++) {
        console.log(i);
    }
}

// run-time of o(1)
// console.log(logAtMost(10000));


// ============== Space-complexity =================== 

// challenge: write a function that takes in an array of numbers with length n, and returns the sum of the numbers in the array.
function addArr(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// run-time of o(n) and o(1) space
// console.log(addArr([5, 10, 15, 20]));

// challenge: write a function that takes in an array of numbers with length n, and returns a new array with each numbers twice the initial array.
function doubleArr(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

// run-time of o(n) and o(n) space
// console.log(doubleArr([5, 10, 15, 20]));

// ============= Logarithms - Time and Space Complexity  ================ 

// Recall that, logarithms are simply the inverse of exponentiation. It's complexity (logn) is very good compared to o(n), o(n^2), o(nlogn) ...
// It's importtant that you recognise this type of complexity for both time and space.
// Now, certain searching algorithms have logarithmic time complexities..efficient sorting algorithms involve logarithms...some recursive algorithms involve logarithmic space complexity.

// TODO: Analyse the big - o of as many algorithms as you can

