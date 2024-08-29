// ************************ For Loop ************************

// **for Loop**
// The for loop in JavaScript is used to repeatedly execute a block of code as long as a specified condition is true. It's typically used when the number of iterations is known beforehand.


for (let i = 0; i < 5; i++) {
    console.log(`Iteration: ${i}`);
}


// **Looping Through an Array**
const fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}



// ************************ Break and Continue ************************
// **break**
// The break statement is used to exit a loop or terminate a switch statement. When encountered, it immediately stops the execution of the nearest enclosing loop or switch, and control moves to the next statement following the loop or switch.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
    console.log(`Value of i is ${index}`);
        
}

// **continue**
// The continue statement in JavaScript is used to skip the current iteration of a loop and move on to the next iteration. It's typically used when you want to bypass certain iterations based on a condition.
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}


// ************************ while and do...while Loop ************************

// **while Loop**
// The while loop in JavaScript continues to execute a block of code as long as a specified condition evaluates to true.
let count = 0;
while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}

// **Looping Through an Array**
let myArray = ['flash', "batman", "superman"]
let arr = 0
while (arr < myArray.length) {
    // console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


// **do...while Loop**
// The do...while loop is similar to the while loop, but it guarantees that the loop body is executed at least once before the condition is tested.
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
