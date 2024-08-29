// ************************ Filter ************************
// The filter method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array.

// Syntax:
array.filter(function(element, index, array) {
    // return true to keep the element, false otherwise
});
// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array that filter is being applied to.


// Key Points:
// Return Value: filter returns a new array containing only elements that pass the test.
// Non-Destructive: The original array is not modified.
// Chainable: filter can be chained with other array methods.


// **Filtering in array**
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNums.filter( (num) => {
    return num > 4
} )


const words = ['apple', 'banana', 'cherry', 'date'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords);


// **Filtering in object**
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);


// ************************ Map ************************
//   The map method creates a new array populated with the results of calling a provided function on every element in the calling array. It does not modify the original array.

// Syntax:
array.map(function(element, index, array) {
    // return the new value for the element
});

// element: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array map was called upon.

// Key Points:
// Return Value: map returns a new array with transformed elements.
// Non-Destructive: The original array is not modified.
// Chainable: map can be chained with other array methods.



const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})

const newNumss = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNumss);



// ************************ Reduce ************************
// The reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It processes the array from left to right.

// Syntax:
array.reduce(function(accumulator, currentValue, index, array) {
    // return the updated accumulator
}, initialValue);

// accumulator: The accumulated value previously returned in the last invocation of the callback, or initialValue, if supplied.
// currentValue: The current element being processed in the array.
// index (optional): The index of the current element being processed in the array.
// array (optional): The array reduce was called upon.
// initialValue (optional): A value to use as the first argument to the first call of the callback.

// Key Points:
// Return Value: reduce returns a single value based on the array elements.
// Non-Destructive: The original array is not modified.
// Initial Value: If initialValue is provided, it is used as the first argument to the first call of the callback; otherwise, the first element of the array is used as the initial accumulator value.


const myNumss = [1, 2, 3]

// const myTotal = myNumss.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNumss.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);



// Counting Occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count = fruits.reduce(function(accumulator, fruit) {
    if (!accumulator[fruit]) {
        accumulator[fruit] = 0;
    }
    accumulator[fruit]++;
    return accumulator;
}, {});

console.log(count);