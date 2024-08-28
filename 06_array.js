// **JavaScript Array Methods**

const arr = [1, 2, 3, 4, 5];
const arr2 = [11, 22, 33, 44, 55];


const newarr = [...arr,...arr2]
console.log(newarr);

// Array Creation
const newArray = new Array(10);             // new Array(size) - Creates an array with the specified size.
console.log(newArray);                      // Output: [ <10 empty items> ]

const filledArray = Array.of(1, 2, 3);      // Array.of(...items) - Creates a new array with the given items.
console.log(filledArray);                   // Output: [1, 2, 3]

const fromArray = Array.from('hello');      // Array.from(arrayLike) - Creates a new array from an array-like or iterable object.
console.log(fromArray);                     // Output: ['h', 'e', 'l', 'l', 'o']


// Array Methods
console.log(arr.length);                  // length - Returns the number of elements in the array.
console.log(arr.push(6));                 // push(...items) - Adds one or more elements to the end of the array and returns the new length.
console.log(arr.pop());                   // pop() - Removes the last element from the array and returns it.
console.log(arr.shift());                 // shift() - Removes the first element from the array and returns it.
console.log(arr.unshift(0));              // unshift(...items) - Adds one or more elements to the beginning of the array and returns the new length.
console.log(arr.concat([7, 8]));          // concat(...arrays) - Combines two or more arrays and returns a new array.
console.log(arr.join('-'));               // join(separator) - Joins all elements of the array into a string, separated by the specified separator.
console.log(arr.slice(1, 4));             // slice(start, end) - Returns a shallow copy of a portion of the array into a new array.
console.log(arr.splice(1, 2, 'a', 'b'));  // splice(start, deleteCount, ...items) - Changes the contents of an array by removing or replacing elements.
console.log(arr.reverse());               // reverse() - Reverses the elements of the array in place.
console.log(arr.sort());                  // sort(compareFunction) - Sorts the elements of the array in place.
console.log(arr.includes(3));             // includes(value) - Checks if the array contains the specified value.
console.log(arr.indexOf(3));              // indexOf(value) - Returns the first index at which a given element can be found, or -1 if not present.
console.log(arr.lastIndexOf(3));          // lastIndexOf(value) - Returns the last index at which a given element can be found, or -1 if not present.
console.log(arr.find(x => x > 2));        // find(callback) - Returns the first element that satisfies the provided testing function.
console.log(arr.findIndex(x => x > 2));   // findIndex(callback) - Returns the index of the first element that satisfies the provided testing function.
console.log(arr.filter(x => x > 2));      // filter(callback) - Creates a new array with all elements that pass the test implemented by the provided function.
console.log(arr.map(x => x * 2));         // map(callback) - Creates a new array with the results of calling a provided function on every element in the calling array.
console.log(arr.reduce((acc, curr) => acc + curr, 0));  // reduce(callback, initialValue) - Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
console.log(arr.flat());                  // flat(depth) - Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(arr.flatMap(x => [x, x * 2]));// flatMap(callback) - Maps each element using a mapping function, then flattens the result into a new array.
console.log(arr.toString());              // toString() - Returns a string representing the array and its elements.
console.log(arr.toLocaleString());        // toLocaleString() - Returns a string representing the array and its elements, in a locale-specific format.
console.log(arr.copyWithin(0, 3, 5));     // copyWithin(target, start, end) - Copies a portion of the array to another location within the same array.
console.log(arr.fill(0));                 // fill(value, start, end) - Changes all elements in an array to the specified value, from start index to end index.
console.log(arr.entries());               // entries() - Returns a new Array Iterator object that contains the key/value pairs for each index in the array.
console.log([...arr.entries()]);          // Spread operator to show the entries.
console.log(arr.keys());                  // keys() - Returns a new Array Iterator object that contains the keys (indexes) for each index in the array.
console.log([...arr.keys()]);             // Spread operator to show the keys.
console.log(arr.values());                // values() - Returns a new Array Iterator object that contains the values for each index in the array.
console.log([...arr.values()]);           // Spread operator to show the values.
