// ************************ For of Loop ************************
// The for...of loop in JavaScript is used to iterate over iterable objects like arrays, strings, maps, sets, and more. It simplifies the process of accessing each element in an iterable without needing to use an index.

// **Iterating Over an Array**
const numbers = [10, 20, 30, 40, 50];

for (const num of numbers) {
    console.log(num);
}

// **Iterating Over a String**
const greeting = "Hello";

for (const char of greeting) {
    console.log(char);
}

// **Iterating Over a Set**
const uniqueNumbers = new Set([1, 2, 3, 4, 5]);

for (const num of uniqueNumbers) {
    console.log(num);
}

// **Iterating Over a Map**
const map = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
]);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}


// Note: using for loop object is not iterable.



// ************************ For in Loop ************************
// The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It is particularly useful for iterating over object keys.

// **Iterating Over object**
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}


// ************************ For each Loop ************************
// The forEach method in JavaScript is used to execute a provided function once for each array element. It is commonly used for array iteration.

// Syntax:
array.forEach(function(element, index, array) {
    // code to be executed for each element
});
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array that forEach is being applied to.


// **Iterating Over an Array**
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach( function (val){
    // console.log(val);
} )

// **Arrow function**
coding.forEach( (item) => {
        // console.log(item);
    } )


// ** Using Function**
function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)


coding.forEach( (item, index, arr)=> {
    //     console.log(item, index, arr);
    } )


// **Iterating Over an Array of objects**
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )

// Mutability: forEach can modify the elements of the array if needed.
// Return Value: forEach does not return a new array or any value; it returns undefined.
// Not Chainable: Since forEach does not return a value, it is not chainable.

