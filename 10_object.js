// **Object Methods and Properties**

const obj = {
    name: "Alice",
    age: 30,
    job: "Engineer",
    greet: function() { return `Hello, my name is ${this.name}`; },
    hobbies: ['reading', 'hiking']
};

// Object Creation
const newObj = new Object();          // new Object() - Creates a new object.
console.log(newObj);                  // Output: {}

const obj2 = Object.create(obj);     // Object.create(proto) - Creates a new object with the specified prototype object.
console.log(obj2.name);              // Output: "Alice" (inherited from prototype)

// Accessing and Modifying Properties
console.log(obj.name);               // Access property - Output: "Alice"
obj.age = 31;                        // Modify property
console.log(obj.age);                // Output: 31

console.log(obj['job']);             // Access property using bracket notation - Output: "Engineer"

// Adding New Properties
obj.location = "New York";           // Add new property
console.log(obj.location);           // Output: "New York"

// Deleting Properties
delete obj.location;                // Delete property
console.log(obj.location);          // Output: undefined

// Checking Properties
console.log('name' in obj);              // in operator - Checks if the property exists - Output: true
console.log(obj.hasOwnProperty('age'));  // hasOwnProperty(property) - Checks if the property exists directly on the object - Output: true

// Iterating Over Properties
for (let key in obj) {
    console.log(key, obj[key]);     // Output: "name Alice", "age 31", "job Engineer"
}

Object.keys(obj).forEach(key => {    // Object.keys(object) - Returns an array of the object's own enumerable property names.
    console.log(key, obj[key]);      // Output: "name Alice", "age 31", "job Engineer"
});

Object.values(obj).forEach(value => { // Object.values(object) - Returns an array of the object's own enumerable property values.
    console.log(value);               // Output: "Alice", 31, "Engineer"
});

Object.entries(obj).forEach(([key, value]) => { // Object.entries(object) - Returns an array of the object's own enumerable string-keyed property [key, value] pairs.
    console.log(key, value);      // Output: "name Alice", "age 31", "job Engineer"
});

// Merging Objects
const additionalInfo = { country: "USA", salary: 70000 };
const mergedObj = { ...obj, ...additionalInfo }; // Spread operator - Merges properties from additionalInfo into obj.
console.log(mergedObj);            // Output: { name: "Alice", age: 31, job: "Engineer", country: "USA", salary: 70000 }

// Cloning Objects
const clonedObj = { ...obj };       // Spread operator - Creates a shallow copy of the object.
console.log(clonedObj);            // Output: { name: "Alice", age: 31, job: "Engineer" }

// Using Object.assign
const target = { name: "Bob" };
const source = { age: 31, job: "Engineer" };
Object.assign(target, source);     // Object.assign(target, ...sources) - Copies properties from one or more source objects to a target object.
console.log(target);              // Output: { name: "Bob", age: 31, job: "Engineer" }

// Freezing Objects
Object.freeze(obj);                 // Object.freeze(object) - Freezes an object: no changes can be made.
obj.name = "Bob";
console.log(obj.name);             // Output: "Alice" (changes are not applied)

// Sealing Objects
Object.seal(obj);                   // Object.seal(object) - Seals an object: prevents new properties from being added and marks all existing properties as non-configurable.
obj.newProp = "new";
console.log(obj.newProp);          // Output: undefined (new properties cannot be added)

// Getting Object Constructor
console.log(obj.constructor);       // Output: [Function: Object]

// Converting Object to JSON
const jsonString = JSON.stringify(obj); // JSON.stringify(object) - Converts the object to a JSON string.
console.log(jsonString);            // Output: '{"name":"Alice","age":31,"job":"Engineer"}'

const parsedObj = JSON.parse(jsonString); // JSON.parse(jsonString) - Converts a JSON string to an object.
console.log(parsedObj);             // Output: { name: "Alice", age: 31, job: "Engineer" }

// Object Property Descriptors
const descriptor = Object.getOwnPropertyDescriptor(obj, 'age'); // Object.getOwnPropertyDescriptor(object, property) - Returns the descriptor for a property.
console.log(descriptor);         // Output: { value: 31, writable: true, enumerable: true, configurable: true }
