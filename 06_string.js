// **different ways to define strings in JavaScript**


const singleQuotedString = 'Hello, World!';         // Single Quotes

const doubleQuotedString = "Hello, World!";         // Double Quotes

const templateLiteralString = `Hello, World!`;      // Template Literals (Backticks)

const multiLineString = `This is a string           // Multi-line String with Template Literals
that spans multiple lines.`;

const name = 'John';                                // String Interpolation with Template Literals
const greeting = `Hello, ${name}!`;// "Hello, John!"

const stringObject = new String('Hello, World!');   // String Constructor

const stringLiteral = String('Hello, World!');      // String Literal using String() function



// **String Methods**
const str = "Hello, JavaScript!";

console.log(str.length);                        // length - Returns the number of characters in the string.
console.log(str.charAt(0));                     // charAt(index) - Returns the character at the specified index.
console.log(str.indexOf('J'));                  // indexOf(substring) - Returns the first occurrence index of the substring.
console.log(str.lastIndexOf('a'));              // lastIndexOf(substring) - Returns the last occurrence index of the substring.
console.log(str.substring(0, 5));               // substring(start, end) - Returns the part of the string between the start and end indexes.
console.log(str.slice(7, 17));                  // slice(start, end) - Returns a section of the string from start to end, allowing negative indices.
console.log(str.toUpperCase());                 // toUpperCase() - Converts the entire string to uppercase.
console.log(str.toLowerCase());                 // toLowerCase() - Converts the entire string to lowercase.
console.log("   Hello!   ".trim());             // trim() - Removes whitespace from both ends of the string.
console.log(str.replace('JavaScript','World')); // replace(searchValue, newValue) - Replaces the first occurrence of the search value with the new value.
console.log("Hi Hi".replaceAll('Hi','Hello'));  // replaceAll(searchValue, newValue) - Replaces all occurrences of the search value with the new value.
console.log(str.split(' '));                    // split(separator) - Splits the string into an array of substrings based on the separator.
console.log(str.includes('JavaScript'));        // includes(substring) - Checks if the substring exists within the string.
console.log(str.startsWith('Hello'));           // startsWith(substring) - Checks if the string starts with the specified substring.
console.log(str.endsWith('!'));                 // endsWith(substring) - Checks if the string ends with the specified substring.
console.log(str.concat(' Welcome!'));           // concat(...strings) - Concatenates the string with one or more strings.
console.log(str.repeat(2));                     // repeat(count) - Returns a new string containing the specified number of copies of the original string.
console.log(str.valueOf());                     // valueOf() - Returns the primitive value of the string object.
console.log(new String('Hello').toString());    // toString() - Returns a string representing the specified object.
console.log(str.padStart(20, '*'));             // padStart(targetLength, padString) - Pads the start of the string with another string to a certain length.
console.log(str.padEnd(20, '*'));               // padEnd(targetLength, padString) - Pads the end of the string with another string to a certain length.
console.log(str.match(/JavaScript/));           // match(regex) - Matches the string against a regular expression and returns the matches.
console.log([...str.matchAll(/a/g)]);           // matchAll(regex) - Returns all matches of a regular expression in the string.
console.log(str.search(/JavaScript/));          // search(regex) - Searches the string for a match against a regular expression and returns the index.
console.log('abc'.localeCompare('abd'));        // localeCompare(compareString) - Compares two strings in the current locale and returns a number.
console.log(String.fromCharCode(72, 101, 108)); // fromCharCode(...codes) - Returns a string created from the specified sequence of UTF-16 code units.
console.log(str.split(''));                     // split('') - Converts the string into an array of characters.
console.log(str.charCodeAt(0));                 // charCodeAt(index) - Returns the Unicode of the character at the specified index.
console.log('e\u0301'.normalize('NFC'));        // normalize(form) - Returns the Unicode Normalization Form of the string.
