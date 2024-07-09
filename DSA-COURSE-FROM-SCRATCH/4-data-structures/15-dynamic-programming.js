// ============= DYNAMIC PROGRAMMING =================

// ==== what is dynamic programming? ====

/*
    Dynamic programming is a method of solving a complex problem by breaking it down into 
    a collection of simpler sub-problems, solving each of those sub-problems just once, and 
    storing their solutions.
*/

// === when can we use dynamic programming? ===

/*
    We can use dynamic programming when there are:
    1. overlapping sub-problems.
    2. optimal sub-structure present.
*/

// === overlapping sub-problems ===

/*
    A problem is said to have overlapping sub-problem if it can be broken down into
    sub-problems which are re-used several times. A very good example is the fibonacci 
    sequence.
*/

// === optimal sub-structure ===

/*
    A problem is said to have optimal sub-structure if the optimal solution can be 
    obtained/constructed from the optimal solutions of the sub-problems.
*/

/*
    Note: So, one of the crux of dynamic programming is to use past problems to solve future
    problems. There's a very beautiful quote for it as we would highlight below:

    "Those who cannot remember the past are condemned to repeat it"  - :)
*/

// Now, let's take a simple fibonacci sequence recursive function for example...

/*
    Note: You shouldn't try to run the code below with numbers above 40...cos it gets really slow at
    that point and can slow your browser if you are using that to run the code.
*/

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// console.log(fib(5));

/*
    Note: The algorithm above runs at o(2^N) run-time and o(N) space.
*/

/*
    Note: One thing to note about this function is how it can get very slow pretty quickly...
    The question is why?
    The reason is simple...You would realize that as n grows, the recursive function performs 
    many repetitive calls again and again even though they have been computed before...which 
    causes the function to get really slow as there's no place to store/cache function calls 
    that have been computed before for res-usability. 
    Now, this particular reason is what would bring us into the concept of "MEMOIZATION".
*/

// === Introduction to Memoization ===

// === what is memoization? ===

/*
    Memoization is simply the idea of storing expensive function calls and returning the cached
    result when the same inputs occur again.
*/

function fibMemoized(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;
  let res = fibMemoized(n - 1, memo) + fibMemoized(n - 2, memo);
  memo[n] = res;
  return res;
}

// console.log(fibMemoized(100));

/*
    Note: The algorithm above runs at o(N) run-time and o(N) space.
*/

/*
    Note: Do you observe how faster the algorithm became by utilizing memoization...You can now
    run figures like even 50, 70 and 100 cos we are not repeating computations we have already done
    before.

    Now, the quote we mentioned earlier makes sense, we are not condemned to repeat the past cos we
    can remember it...You can now see how memoization helps us in dynamic programming.
*/
