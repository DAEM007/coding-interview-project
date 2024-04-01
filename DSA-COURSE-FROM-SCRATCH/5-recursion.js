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
console.log(recursiveFactorial(3));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
