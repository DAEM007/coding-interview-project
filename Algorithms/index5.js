// problem 28: Now, compute a fibonacci sequence in an array and determine the Big-o of your algorithm
function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(5));
// note: since we have just one loop in the above algorithm, the big-o is o(n).

// problem 29: compute the factorial of an non-negative integer using a for loop;
function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// console.log(factorial(5));
// note that the big-o of the above algorithm is o(n).

// problem 30: Determine if a number "n" is prime or not
function prime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

// console.log(prime(19));
// note: that the time complexity for the above algorithm is o(n).

// problem 31: Resolve Power of two from index4.js without recursion
function powerTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

// console.log(powerTwo(8));
// Note: You might want to think that the big - o of the algorithm above is o(n) but notice what is happening to the input of the algorithm in the loop...we see here that the input is reduced by half hence making the big-o of the algorithm to be o(logn).

// solving the above in constant time using the bitwise operator
function powerTwoBitwise(n) {
  if (n < 1) {
    return false;
  } else {
    return (n & (n - 1)) === 0;
  }
}

// console.log(powerTwoBitwise(8));

// Review of the fibonacci sequence with the big o
function fib(n) {
  // base case
  if (n < 2) {
    return n;
  }
  // Note: The return statement below keeps going infinitely without the base case
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(6));
// Note here that as the value of the input grow the time complexity increases by 2^n...so the big o of the recursive solution above is o(2^n) and it's important to note that this is far worse than the iterarive solution which is o(n)...

// Review of the factorial solution with recursion
function factorial(n) {
  // base case
  if (n < 2) {
    return 1;
  }
  return n * factorial(n - 1);
}

// console.log(factorial(5));
// Note: Here we see that as the value of the input grows, the time complexity of the recursive solution increases linearly...hence the big-o of the above solution is o(n)...

// Brute-force solution with [o(nlogn) + o(n)] run-time and o(1) space
function secondLargest(arr, n) {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = arr[n - 1];
  let sLargest = -Infinity;
  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] < largest && arr[i] !== largest) {
      sLargest = arr[i];
      break;
    }
  }
  return [largest, sLargest];
}

function sLargest(arr, n) {
  let largest = arr[0];
  let secondLargest = -Infinity;
  for (let i = 1; i < n; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] < largest && arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

function sSmallest(arr, n) {
  let smallest = arr[0];
  let secondSmallest = Infinity;
  for (let i = 1; i < n; i++) {
    if (arr[i] < smallest) {
      secondSmallest = smallest;
      smallest = arr[i];
    } else if (arr[i] > smallest && arr[i] < secondSmallest) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
}

// solution with o(n) run-time and o(1) space
function secondLargestOptimized(arr, n) {
  let sLargestNumber = sLargest(arr, n);
  let sSmallestNumber = sSmallest(arr, n);
  return [sLargestNumber, sSmallestNumber];
}

// console.log(secondLargest([5, 7, 1, 7, 4, 2], 6));
// console.log(secondLargestOptimized([5, 7, 6, 1, 4, 2], 6));
