// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ Variable in javaScript ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
// In JavaScript, variables are used to store data values that can be referenced and manipulated throughout the code. Variables can be declared using three keywords: var, let, and const. Each of these has different behaviors regarding scope, hoisting, and mutability.




// ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ What is the diffrent between var, let and const ? ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐ 
// Scope: var is function or globally scoped, let and const are block scoped.
// Re-declaration: var can be re-declared, let and const cannot be re-declared.
// Initialization: var and let can be declared without initialization, const must be initialized.
// Updation: var and let can be updated, const cannot be updated.



// Example to demonstrate var, let, and const
// 1. Scope
function scopeExample() {
    if (true) {
        var varVariable = "I am a var variable"; // Function scoped
        let letVariable = "I am a let variable"; // Block scoped
        const constVariable = "I am a const variable"; // Block scoped
        console.log(varVariable); // Output: I am a var variable
        console.log(letVariable); // Output: I am a let variable
        console.log(constVariable); // Output: I am a const variable
    }
    console.log(varVariable); // Output: I am a var variable
    // console.log(letVariable); // ReferenceError
    // console.log(constVariable); // ReferenceError
}
scopeExample();

// 2. Re-declaration
var reDeclVar = 1;
var reDeclVar = 2; // Allowed
console.log(reDeclVar); // Output: 2

let reDeclLet = 3;
// let reDeclLet = 4; // SyntaxError

const reDeclConst = 5;
// const reDeclConst = 6; // SyntaxError

// 3. Initialization
var initVar; // Allowed
let initLet; // Allowed
// const initConst; // SyntaxError

initVar = 10;
initLet = 20;
console.log(initVar); // Output: 10
console.log(initLet); // Output: 20

// 4. Updation
var updateVar = 100;
updateVar = 200; // Allowed
console.log(updateVar); // Output: 200

let updateLet = 300;
updateLet = 400; // Allowed
console.log(updateLet); // Output: 400

const updateConst = 500;
// updateConst = 600; // TypeError
console.log(updateConst); // Output: 500

