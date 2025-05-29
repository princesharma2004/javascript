// Dates

const date = new Date();
// console.log(date); // Current date and time
// console.log(date.toString()); // String representation of the date

// console.log(date.toDateString()); // Date part only
// console.log(date.toTimeString()); // Time part only
// console.log(date.toISOString()); // ISO format: YYYY-MM-DDTHH:mm:ss.sssZ
// console.log(date.toLocaleDateString()); // Locale-specific date format
// console.log(date.toLocaleTimeString()); // Locale-specific time format

// console.log(typeof date); // "object"

let birthday = new Date(2004, 9, 21, 7, 54); // Year, Month (0-indexed), Day, Hour, Minute
// console.log(birthday.toLocaleString()); // "10/21/2004, 7:54:00 AM" (or similar, depending on locale)

let anotherBirthday = new Date('2004-10-21');
anotherBirthday = new Date('2004-10-21T00:00:00'); // ISO format
anotherBirthday = new Date('21-10-2004'); // European format (DD-MM-YYYY)
// console.log(anotherBirthday.toLocaleString()); // "10/21/2004, 12:00:00 AM" (or similar, depending on locale)

let myTimeStamp = Date.now(); // Current timestamp in milliseconds since January 1, 1970

// console.log(myTimeStamp); // e.g., 1700000000000
// console.log(anotherBirthday.getTime()); // Timestamp of anotherBirthday in milliseconds

// console.log(myTimeStamp - anotherBirthday.getTime()); // Difference in milliseconds

// console.log(Math.floor((Date.now()/1000))) // Current timestamp in seconds since January 1, 1970

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

// console.log(newDate.toLocaleString('default', { weekday: 'short', timeZone: 'Asia/Kolkata' })) // Short weekday name in specified timezone
