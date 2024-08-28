// **JavaScript Date and Time Methods**

const now = new Date();                 // Date() - Creates a new Date object with the current date and time.
console.log(now);                       // Output: Current date and time.

console.log(new Date(2024, 7, 28));     // new Date(year, month, day) - Creates a Date object for the specified date.

console.log(new Date('2024-08-28'));    // new Date(dateString) - Creates a Date object from a date string.

console.log(now.getFullYear());         // getFullYear() - Returns the year of the specified date.
console.log(now.getMonth());            // getMonth() - Returns the month (0-11) of the specified date.
console.log(now.getDate());             // getDate() - Returns the day of the month (1-31) of the specified date.
console.log(now.getDay());              // getDay() - Returns the day of the week (0-6) of the specified date.
console.log(now.getHours());            // getHours() - Returns the hour (0-23) of the specified date.
console.log(now.getMinutes());          // getMinutes() - Returns the minutes (0-59) of the specified date.
console.log(now.getSeconds());          // getSeconds() - Returns the seconds (0-59) of the specified date.
console.log(now.getMilliseconds());     // getMilliseconds() - Returns the milliseconds (0-999) of the specified date.
console.log(now.getTime());              // getTime() - Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
console.log(now.getTimezoneOffset());    // getTimezoneOffset() - Returns the time zone offset from UTC in minutes.

console.log(now.setFullYear(2025));      // setFullYear(year) - Sets the year of the Date object.
console.log(now.setMonth(11));           // setMonth(month) - Sets the month (0-11) of the Date object.
console.log(now.setDate(15));            // setDate(day) - Sets the day of the month (1-31) of the Date object.

console.log(now.toDateString());         // toDateString() - Returns a human-readable string representing the date portion of the Date object.
console.log(now.toTimeString());         // toTimeString() - Returns a human-readable string representing the time portion of the Date object.
console.log(now.toISOString());          // toISOString() - Returns the Date object as a string in ISO format.
console.log(now.toUTCString());          // toUTCString() - Returns a string representing the date and time in UTC format.
console.log(now.toLocaleString());       // toLocaleString() - Returns a string representing the date and time in the local format.
console.log(now.toLocaleDateString());   // toLocaleDateString() - Returns a string representing the date portion in the local format.
console.log(now.toLocaleTimeString());   // toLocaleTimeString() - Returns a string representing the time portion in the local format.
console.log(now.toString());             // toString() - Returns a string representing the Date object.

console.log(now.valueOf());              // valueOf() - Returns the primitive value of the Date object (same as getTime()).
console.log(Date.now());                 // Date.now() - Returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.


now.toLocaleString('default', {
    weekday: "long",
    
    
})
