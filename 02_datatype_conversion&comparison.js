// Understanding Data Types in JavaScript.
// JavaScript has a rich type system that can be categorized into two main types: Primitive and Reference (Non-Primitive) data types. Each type has unique characteristics and behaviors, especially when it comes to memory allocation and manipulation.

// ++++++++++++++++++Primitive Data Types(Call by value)++++++++++++++++++

// Primitive data types are the most basic data types provided by JavaScript. They are predefined, immutable, and compared by their value. The seven primitive data types in JavaScript are:
// String: Represents a sequence of characters.
const greeting = "Hello, World!";

// Number: Represents both integer and floating-point numbers.
const score = 100;          // Integer
const scoreValue = 100.3;  // Floating-point

// Boolean: Represents a logical entity and can have two values: true or false.
const isLoggedIn = false;

// Null: Represents the intentional absence of any object value.
// const outsideTemp = null;

// Undefined: A variable that has been declared but has not yet been assigned a value.
let userEmail; // userEmail is undefined

// Symbol: A unique and immutable primitive value that can be used as the key of an object property.
const id = Symbol('123');
const anotherId = Symbol('123');
//console.log(id === anotherId); // false, because each symbol is unique

// BigInt: Represents integers with arbitrary precision.
const bigNumber = 3456543576654356754n; // BigInt


// ++++++++++++++++++Non-Primitive(Reference) Data Types(Call by Reference)++++++++++++++++++

// In JavaScript, non-primitive data types (also known as reference types) are more complex data types that can store collections of values and more sophisticated entities. Unlike primitive data types, which are immutable and stored by value, non-primitive data types are mutable and stored by reference.
// Non-primitive data types, such as objects, arrays, and functions, are user-defined in the sense that developers can create and structure them according to the specific needs of their applications. This flexibility allows for the creation of customized and dynamic data structures, making non-primitive types essential for building complex, real-world applications in JavaScript.
// The main reference types in JavaScript include:

// Array: A list-like object that can hold multiple values.
const heros = ["shaktiman", "naagraj", "doga"];

// Object: A collection of key-value pairs.
let myObj = {
    name: "hitesh",
    age: 22,
};

// Function: A special type of object that can be called to perform a task.
const myFunction = function(){
    console.log("Hello world");
};


// ++++++++++++++++++Call by Value vs. Call by Reference++++++++++++++++++
// Call by Value: Primitive types are passed by value, meaning a copy is made, and changes inside the function do not affect the original value.
function modifyValue(x) {
    x = x + 10;
    console.log("Inside function: ", x); // Output: 20
}

let num = 10;
// modifyValue(num);
// console.log("Outside function: ", num); // Output: 10

// Call by Reference: Non-primitive types are passed by reference, meaning the function can modify the original object or array.
function modifyObject(obj) {
    obj.name = "Adarsh";
    console.log("Inside function: ", obj.name); // Output: Adarsh
}

let person = { name: "John" };
// modifyObject(person);
// console.log("Outside function: ", person.name); // Output: Adarsh


// ++++++++++++++++++Stack and Heap++++++++++++++++++
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


// ++++++++++++++++++ type of() operator ++++++++++++++++++
// The typeof operator is used to check the type of a variable or value. It returns a string that indicates the type, which can help with debugging and type checking in your code.

let x;
// console.log(typeof x); // Output: "undefined"

let isTrue = true;
// console.log(typeof isTrue); // Output: "boolean"

let age = 25;
// console.log(typeof age); // Output: "number"

let bigNumber1 = 1234567890123456789012345678901234567890n;
// console.log(typeof bigNumber); // Output: "bigint"

let name = "Alice";
// console.log(typeof name); // Output: "string"

let sym = Symbol('description');
// console.log(typeof sym); // Output: "symbol"

let person1 = { name: "John", age: 30 };
// console.log(typeof person); // Output: "object"

let nothing = null;
// console.log(typeof nothing); // Output: "object"

function greet() {
  return "Hello!";
}
// console.log(typeof greet); // Output: "function"

let arr = [1, 2, 3];
// console.log(typeof arr); // Output: "object"


// ++++++++++++++++++ Datatype Conversion ++++++++++++++++++
// In JavaScript, type conversion refers to the process of converting values from one type to another. This can be done explicitly by the developer or implicitly by the JavaScript engine. There are two main types of conversion: implicit conversion and explicit conversion.

// Implicit Conversion: JavaScript automatically converts types as needed during operations, which can sometimes lead to unexpected results.
