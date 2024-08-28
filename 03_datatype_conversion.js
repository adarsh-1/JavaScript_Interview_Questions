// ************************ Datatype Conversion ************************
// In JavaScript, type conversion refers to the process of converting values from one type to another. This can be done explicitly by the developer or implicitly by the JavaScript engine. There are two main types of conversion: implicit conversion and explicit conversion.

// Implicit Conversion: JavaScript automatically converts types as needed during operations, which can sometimes lead to unexpected results.

// String and Number Addition:
let result = "5" + 1; // "51"
// Here, the number 1 is converted to a string, and then concatenated with "5".

// Equality Comparison:
let isEqual = "5" == 5; // true
// Here, the string "5" is converted to the number 5, so the comparison returns true.

// Arithmetic Operations:
let sum = "5" - 1; // 4
// The string "5" is converted to a number before performing the subtraction.


// Explicit Conversion: Developers can manually convert types using built-in functions and methods for more control over the conversion process.

// String(): Converts a value to a string.
console.log(String(123)); // Output: "123"

// Number(): Converts a value to a number.
console.log(Number('123')); // Output: 123

// Boolean(): Converts a value to a boolean.
console.log(Boolean(1)); // Output: true

// parseInt(): Parses a string argument and returns an integer.
console.log(parseInt('123px')); // Output: 123

// parseFloat(): Parses a string argument and returns a floating-point number.
console.log(parseFloat('123.45abc')); // Output: 123.45