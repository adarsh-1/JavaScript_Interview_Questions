// ************************ Understanding Data Types in JavaScript ************************
// JavaScript has a rich type system that can be categorized into two main types: Primitive and Reference (Non-Primitive) data types. Each type has unique characteristics and behaviors, especially when it comes to memory allocation and manipulation.



// ************************ Primitive Data Types(Call by value) ************************
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



// ************************ Non-Primitive(Reference) Data Types(Call by Reference) ************************
// In JavaScript, non-primitive (reference) data types are mutable, complex structures that can store collections and more sophisticated entities. Unlike primitive types, which are immutable and stored by value, non-primitive types are stored by reference. They include objects, arrays, and functions, and allow for flexible, user-defined data structures essential for building dynamic applications.

const heros = ["shaktiman", "naagraj", "doga"];                // Array: A list-like object that can hold multiple values.
let myObj = { name: "Adarsh", age: 22,};                       // Object: A collection of key-value pairs.
const myFunction = function(){console.log("Hello world")};     // Function: A special type of object that can be called to perform a task.




// ************************ type of() operator ************************
// The typeof operator is used to check the type of a variable or value. It returns a string that indicates the type, which can help with debugging and type checking in your code.

let z;                                      console.log(typeof z);          // "undefined"
let isTrue = true;                          console.log(typeof isTrue);     // "boolean"
let age = 25;                               console.log(typeof age);        // "number"
let bigNumber1 = 12345678901234567890n;     console.log(typeof bigNumber1); // "bigint"
let name = "Alice";                         console.log(typeof name);       // "string"
let sym = Symbol('description');            console.log(typeof sym);        // "symbol"
let nothing = null;                         console.log(typeof nothing);    // "object"
let person1 = { name: "John", age: 30 };    console.log(typeof person1);    // "object"
function greet() { return "Hello!"; }       console.log(typeof greet);      // "function"
let arr = [1, 2, 3];                        console.log(typeof arr);        // "object"