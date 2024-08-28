// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Understanding Data Types in JavaScript ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// JavaScript has a rich type system that can be categorized into two main types: Primitive and Reference (Non-Primitive) data types. Each type has unique characteristics and behaviors, especially when it comes to memory allocation and manipulation.




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐Primitive Data Types(Call by value)⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Primitive data types are the most basic data types provided by JavaScript. They are predefined, immutable, and compared by their value. The seven primitive data types in JavaScript are:

const greeting = "Hello, World!";              // String: Represents a sequence of characters.
const score = 100;                             // Number: Represents both integer and floating-point numbers.
const scoreValue = 100.3;
const isLoggedIn = false;                      // Boolean: Represents a logical entity and can have two values: true or false.
const outsideTemp = null;                      // Null: Represents the intentional absence of any object value.
let userEmail;                                 // Undefined: A variable that has been declared but has not yet been assigned a value.
const bigNumber = 3456543576654356754n;        // BigInt: Represents integers with arbitrary precision.

const id = Symbol('123');                      // Symbol: A unique and immutable primitive value that can be used as the key of an object property.
const anotherId = Symbol('123');
console.log(id === anotherId); // false, because each symbol is unique.


// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐Non-Primitive(Reference) Data Types(Call by Reference)⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐

// In JavaScript, non-primitive (reference) data types are mutable, complex structures that can store collections and more sophisticated entities. Unlike primitive types, which are immutable and stored by value, non-primitive types are stored by reference. They include objects, arrays, and functions, and allow for flexible, user-defined data structures essential for building dynamic applications.

const heros = ["shaktiman", "naagraj", "doga"];                // Array: A list-like object that can hold multiple values.
let myObj = { name: "hitesh", age: 22,};                       // Object: A collection of key-value pairs.
const myFunction = function(){console.log("Hello world")};     // Function: A special type of object that can be called to perform a task.




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐Call by Value vs. Call by Reference⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Call by Value: Primitive types are passed by value, meaning a copy is made, and changes inside the function do not affect the original value.
function modifyValue(x) {
    x = x + 10;
    // console.log("Inside function: ", x); // Output: 20
}

let num = 10;
// modifyValue(num);
console.log("Outside function: ", num); // Output: 10

// Call by Reference: Non-primitive types are passed by reference, meaning the function can modify the original object or array.
function modifyObject(obj) {
    obj.name = "Adarsh";
    // console.log("Inside function: ", obj.name); // Output: Adarsh
}

let person = { name: "John" };
// modifyObject(person);
console.log("Outside function: ", person.name); // Output: Adarsh




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐Stack and Heap⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// Stack Memory:
// Purpose: Stack memory is used for managing function calls, local variables, and control flow. It operates in a last-in, first-out (LIFO) manner.

// Characteristics:
// Fixed Size: Stack memory is limited in size and typically small compared to heap memory.
// Automatic Management: Memory is automatically allocated and deallocated when functions are called and return. Local variables are created when a function is invoked and destroyed when the function exits.
// Fast Access: Access to stack memory is very fast due to its structured and sequential nature.
// Primitives: Primitive data types (like Number, String, Boolean, undefined, and null) are stored in stack memory. These are small and fixed-size values.


// Heap Memory:
// Purpose: Heap memory is used for dynamically allocated memory, such as objects and arrays. It is designed to handle data whose size or lifetime cannot be determined at compile time.

// Characteristics:
// Dynamic Size: Heap memory can grow and shrink dynamically. It's much larger compared to stack memory.
// Manual Management: Memory is managed manually by JavaScript's garbage collector. Objects and arrays are allocated in heap memory, and garbage collection reclaims unused memory.
// Flexible Access: Access to heap memory can be slower compared to stack memory because it involves more complex management and allocation.
// Non-Primitive Data Types: Non-primitive data types (like objects and arrays) are stored in heap memory. These can be of varying sizes and structures.




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ type of() operator ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
// The typeof operator is used to check the type of a variable or value. It returns a string that indicates the type, which can help with debugging and type checking in your code.

// let z;                                      console.log(typeof z);          // "undefined"
// let isTrue = true;                          console.log(typeof isTrue);     // "boolean"
// let age = 25;                               console.log(typeof age);        // "number"
// let bigNumber1 = 12345678901234567890n;     console.log(typeof bigNumber1); // "bigint"
// let name = "Alice";                         console.log(typeof name);       // "string"
// let sym = Symbol('description');            console.log(typeof sym);        // "symbol"
// let nothing = null;                         console.log(typeof nothing);    // "object"
// let person1 = { name: "John", age: 30 };    console.log(typeof person1);    // "object"
// function greet() { return "Hello!"; }       console.log(typeof greet);      // "function"
// let arr = [1, 2, 3];                        console.log(typeof arr);        // "object"




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Datatype Conversion ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
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




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ JavaScript Operation ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
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




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Diffrence between '==' and '===' operator ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
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

