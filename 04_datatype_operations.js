// ************************ JavaScript Operation ************************
// Arithmetic Operations: Basic math operations including addition, subtraction, multiplication, division, modulus, and exponentiation.
let a = 10, b = 5;
console.log("Arithmetic Operations:");
console.log("Addition: ", a + b);      // 15
console.log("Subtraction: ", a - b);   // 5
console.log("Multiplication: ", a * b); // 50
console.log("Division: ", a / b);      // 2
console.log("Modulus: ", a % b);       // 0
console.log("Exponentiation: ", a ** b); // 100000

// Increment and Decrement: Changing the value of a variable by 1, either before or after its use.
let count = 5;
console.log("\nIncrement and Decrement:");
console.log("Pre-increment: ", ++count); // 6
console.log("Post-increment: ", count++); // 6 (then count becomes 7)
console.log("Pre-decrement: ", --count); // 6
console.log("Post-decrement: ", count--); // 6 (then count becomes 5)

// Comparison Operations: Checking equality, strict equality, inequality, and relational comparisons.
console.log("\nComparison Operations:");
console.log("Equality (5 == '5'): ", 5 == '5'); // true
console.log("Strict Equality (5 === '5'): ", 5 === '5'); // false
console.log("Inequality (5 != '5'): ", 5 != '5'); // false
console.log("Strict Inequality (5 !== '5'): ", 5 !== '5'); // true
console.log("Greater Than (10 > 5): ", 10 > 5); // true
console.log("Greater Than or Equal To (10 >= 10): ", 10 >= 10); // true
console.log("Less Than (5 < 10): ", 5 < 10); // true
console.log("Less Than or Equal To (5 <= 5): ", 5 <= 5); // true

// Logical Operations: Combining or inverting boolean values.
console.log("\nLogical Operations:");
console.log("Logical AND (true && false): ", true && false); // false
console.log("Logical OR (true || false): ", true || false); // true
console.log("Logical NOT (!true): ", !true); // false

// Bitwise Operations: Working with binary representations of numbers.
console.log("\nBitwise Operations:");
console.log("Bitwise AND (5 & 3): ", 5 & 3); // 1 (binary 0101 & 0011 = 0001)
console.log("Bitwise OR (5 | 3): ", 5 | 3); // 7 (binary 0101 | 0011 = 0111)
console.log("Bitwise XOR (5 ^ 3): ", 5 ^ 3); // 6 (binary 0101 ^ 0011 = 0110)
console.log("Bitwise NOT (~5): ", ~5); // -6 (binary ~0101 = 1010)
console.log("Bitwise Left Shift (5 << 1): ", 5 << 1); // 10 (binary 0101 << 1 = 1010)
console.log("Bitwise Right Shift (5 >> 1): ", 5 >> 1); // 2 (binary 0101 >> 1 = 0010)
console.log("Unsigned Right Shift (-5 >>> 1): ", -5 >>> 1); // 2147483642

// Assignment Operations: Assigning and updating values using shorthand notation.
let x = 10;
console.log("\nAssignment Operations:");
x += 5;  // Addition Assignment: x = 15
console.log("Addition Assignment (x += 5): ", x); // 15
x -= 3;  // Subtraction Assignment: x = 12
console.log("Subtraction Assignment (x -= 3): ", x); // 12
x *= 2;  // Multiplication Assignment: x = 24
console.log("Multiplication Assignment (x *= 2): ", x); // 24
x /= 4;  // Division Assignment: x = 6
console.log("Division Assignment (x /= 4): ", x); // 6
x %= 5;  // Modulus Assignment: x = 1
console.log("Modulus Assignment (x %= 5): ", x); // 1

// Special Cases:
console.log(null == undefined); // true, because null and undefined are loosely equal
console.log(null === undefined); // false, different types
console.log(NaN == NaN);       // false, NaN is not equal to itself
console.log(Number.isNaN(NaN)); // true, checks if value is NaN





// ************************ Diffrence between '==' and '===' operator ************************
// In JavaScript, == and === are both comparison operators, but they behave differently:


// == (Loose Equality): If the operands are of different types, JavaScript attempts to convert them to the same type before making the comparison. Often used when you don't care about the type of the variables, only their values.
console.log(5 == '5');   // true, because '5' (string) is converted to 5 (number)
console.log(true == 1);  // true, because true is converted to 1
console.log(null == undefined); // true, these are loosely equal


// === (Strict Equality): The operands must be of the same type as well as have the same value for the comparison to return true. Preferred when you need to ensure that both the type and value are identical.
console.log(5 === '5');  // false, because one is a number and the other is a string
console.log(true === 1); // false, different types (boolean vs number)
console.log(null === undefined); // false, different types
console.log(5 === 5);    // true, same type and value