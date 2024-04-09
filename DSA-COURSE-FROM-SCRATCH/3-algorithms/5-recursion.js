// ============= RECURSION =================

// So, the basic idea behind recursion is to take a problem and solve it over and over again on a smaller piece until you hit a base case and then return the final solution or result.

// === what is recursion? ===

// Recursion is a process (or function in our case) that calls itself.

// === what is a call stack? ===

//  So, the stack data structure si what handles invoked functions. It's akin to a stack of papers...so as functions are invoked, they are added to the top of the stack...and then they are popped off from the top of the stack as well.

// === How does recursive functions work? ===

// So the idea here is that you invoke the same function over and over with different inputs until you reach a base case.

// The two (2) important pieces of the recursive function are the recursive call with different inputs and the base case

//  challenge 1:  write a function called countDown that takes in a number and logs the count down of the number up until zero.
function countDown(num) {
  if (num <= 0) {
    console.log(num, "We are done here!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(10);

// challenge 2: write a function that prints the factorial of a number

// iterative solution
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

// recursive solution
function recursiveFactorial(num) {
  if (num === 1) return 1;
  return num * recursiveFactorial(num - 1);
}

// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));
// console.log(recursiveFactorial(3));
// console.log(recursiveFactorial(4));
// console.log(recursiveFactorial(5));

// === where things go wrong in recursion? ===

// No/wrong base case
// wrong returns
// stack overflow (maximum call stack size exceeded)

// === DESIGN PATTERNS IN RECURSION ===

// === Helper method recursion  ===

// So, the idea behind this pattern is that you have an outer function that is invoked with arguments but non-recursive and then a recursive inner function.

// challenge 3 write a function that collects all the odd values of a given array of numbers

// solution with helper functions
function collectOddValues(nums) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(nums);

  return result;
}

// solution with pure recursive functions
function collectOddValuesPure(nums) {
  let result = [];

  if (nums.length === 0) return result;

  if (nums[0] % 2 !== 0) {
    result.push(nums[0]);
  }

  result = result.concat(collectOddValuesPure(nums.slice(1)));

  return result;
}

// console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// console.log(collectOddValuesPure([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Note: A pure recursion tips:

// 1. use methods like slice, the spread operator, and the concat that makes copies of arrays so you don't mutate them.

// 2. strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings.

// 3. to make copies of objects use objects.assign, or the spread operator.
