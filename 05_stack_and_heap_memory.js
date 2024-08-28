// ************************Stack and Heap************************
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




// ************************ Call by Value vs. Call by Reference ************************
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