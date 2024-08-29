// ************************ if, if else, if else-if ************************



// **if Statement**
// Executes a block of code if a specified condition is true.
let num = 10;
if (num > 0) {
    console.log("Positive number");
}
// Output: Positive number


// **if-else Statement**
// Executes one block of code if a condition is true, and another block if it is false.
let num1 = -5;
if (num1 > 0) {
    console.log("Positive number");
} else {
    console.log("Non-positive number");
}
// Output: Non-positive number


// **if-else-if Statement**
// Tests multiple conditions sequentially, executing the first block where the condition is true.
let num2 = 0;
if (num2 > 0) {
    console.log("Positive number");
} else if (num2 < 0) {
    console.log("Negative number");
} else {
    console.log("Zero");
}
// Output: Zero



// ************************ Switch statement ************************
// **switch Statement**
// The switch statement evaluates an expression and executes the corresponding code block based on the matching case. If no match is found, the default block is executed.
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}



// ************************ Ternary Operator ************************
// The ternary operator is a concise way to perform conditional operations. It evaluates a condition and returns one value if the condition is true and another if the condition is false. It is a shorthand for the if-else statement.
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote);


// **falsy values**
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// **truthy values**
// "0", 'false', " ", [], {}, function(){}



// ************************ Nullish Coalescing Operator ************************
// The Nullish Coalescing Operator (??) in JavaScript returns the right-hand operand when the left-hand operand is null or undefined; otherwise, it returns the left-hand operand.

// Syntax: leftOperand ?? rightOperand

// Basic usage
let userInput = null;
let defaultValue = "Default";
let result = userInput ?? defaultValue;
console.log(result);
// Output: Default

// When left operand is not null or undefined
let userInput2 = "User Value";
let result2 = userInput2 ?? defaultValue;
console.log(result2);
// Output: User Value

// Comparison with logical OR (||)
let userInput3 = "";
let result3 = userInput3 || "Fallback";
console.log(result3);
// Output: Fallback

let result4 = userInput3 ?? "Fallback";
console.log(result4);
// Output: (Empty String)

// Difference from OR (||): Unlike the OR operator, which returns the right-hand operand for any falsy value (e.g., false, 0, ""), the Nullish Coalescing Operator only considers null and undefined as nullish values.
// Use Case: Ideal for setting default values when dealing with potentially null or undefined variables, without mistakenly overriding other falsy values like 0 or "".


