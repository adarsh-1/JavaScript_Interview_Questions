// **Literal Notation**
const score = 400;                // Numeric literal - Represents a number directly.
console.log(score);               // Output: 400

// **Object Wrapper**
const balance = new Number(100); // Number object - Creates a number object, though usually less preferred.
console.log(balance);            // Output: [Number: 100]


const num = 123.456;


// **Number Properties**
console.log(Number.MAX_VALUE);          // MAX_VALUE - Represents the largest positive finite value that a number can have.
console.log(Number.MIN_VALUE);          // MIN_VALUE - Represents the smallest positive finite value that a number can have.
console.log(Number.NaN);                // NaN - Represents a "Not-a-Number" value.
console.log(Number.POSITIVE_INFINITY);  // POSITIVE_INFINITY - Represents positive infinity.
console.log(Number.NEGATIVE_INFINITY);  // NEGATIVE_INFINITY - Represents negative infinity.



// **Number Methods**
console.log(num.toExponential(2));      // toExponential([fractionDigits]) - Returns a string representing the number in exponential notation.
console.log(num.toFixed(2));            // toFixed([digits]) - Returns a string representing the number with a specified number of decimal places.
console.log(num.toPrecision(5));        // toPrecision([precision]) - Returns a string representing the number to a specified precision.
console.log(num.toString());            // toString([radix]) - Returns a string representing the number in a specified base.
console.log(num.valueOf());             // valueOf() - Returns the primitive value of the number object.
console.log(Number.parseInt('42', 10)); // parseInt(string, radix) - Parses a string argument and returns an integer.
console.log(Number.parseFloat('3.14')); // parseFloat(string) - Parses a string argument and returns a floating-point number.
console.log(Number.isInteger(4));       // isInteger(value) - Returns true if the value is an integer.
console.log(Number.isFinite(123));      // isFinite(value) - Returns true if the value is a finite number.
console.log(Number.isNaN(NaN));         // isNaN(value) - Returns true if the value is NaN (Not-a-Number).
console.log(Number.isSafeInteger(9007199254740991));    // isSafeInteger(value) - Returns true if the value is a safe integer.
console.log(Number.isSafeInteger(9007199254740992));    // isSafeInteger(value) - Returns false if the value is not a safe integer.
console.log((0.1 + 0.2).toFixed(1));    // Demonstrates floating-point precision issue.



// ************************JavaScript Math Methods************************

console.log(Math.PI);                     // Math.PI - Returns the value of π (pi). 
console.log(Math.abs(-10));               // Math.abs(x) - Returns the absolute value of x. 
console.log(Math.ceil(4.2));              // Math.ceil(x) - Rounds x up to the nearest integer. 
console.log(Math.floor(4.9));             // Math.floor(x) - Rounds x down to the nearest integer. 
console.log(Math.round(4.5));             // Math.round(x) - Rounds x to the nearest integer. 
console.log(Math.max(1, 2, 3));           // Math.max(...values) - Returns the largest of zero or more numbers. 
console.log(Math.min(1, 2, 3));           // Math.min(...values) - Returns the smallest of zero or more numbers. 
console.log(Math.pow(2, 3));              // Math.pow(base, exponent) - Returns base raised to the power of exponent. 
console.log(Math.sqrt(16));               // Math.sqrt(x) - Returns the square root of x. 
console.log(Math.trunc(4.9));             // Math.trunc(x) - Returns the integer part of x by removing any fractional digits. 
console.log(Math.random());               // Math.random() - Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive). 

console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
