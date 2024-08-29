// ** What is IIFE **
// IIFE stands for Immediately Invoked Function Expression. It is a function in JavaScript that is executed right after it is defined. The main purpose of using an IIFE is to create a local scope for variables and avoid polluting the global scope.

// An IIFE is typically written as follows:
(function() {
    // Code inside IIFE
})();

// Breakdown of the Syntax:-
// Function Expression: The function is defined inside parentheses () to create a function expression.
// Immediate Invocation: The () at the end of the function definition immediately invokes the function.


// IIFE without Parameter
(function() {
    const message = "Hello, IIFE!";
    console.log(message); // Output: Hello, IIFE!
})();


// IIFE with Parameter
(function(name) {
    console.log(`Hello, ${name}!`);
})("JavaScript");

