const score = 400

const balance = new Number(400)
console.log(score) // 400
console.log(balance) // [Number: 400]

console.log(balance.toString()) // "400"
console.log(balance.toString().length) // 3
console.log(balance.toFixed(2)) // "400.00" - Fixed to 2 decimal places

const otherBalance = 400.123456789
console.log(otherBalance.toPrecision(5)) // "400.12" - Precision to 5 significant digits

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

// console.log(Number.MIN_VALUE) // 1.7976931348623157e+308
// console.log(Number.MAX_VALUE) // 5e-324

// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991

// console.log(Math.abs(-5)); // 5 - Absolute value
// console.log(Math.round(4.7)); // 5 - Round to nearest integer
// console.log(Math.ceil(4.1)); // 5 - Round up
// console.log(Math.floor(4.9)); // 4 - Round down
// console.log(Math.min(1, 2, 3)); // 1 - Minimum value
// console.log(Math.max(1, 2, 3)); // 3 - Maximum value

// console.log(Math.random()); // Random number between 0 and 1
// console.log(Math.random() * 10); // Random number between 0 and 10
// console.log(Math.floor(Math.random() * 10)); // Random integer between 0 and 9

const min = 10
const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Random integer between min and max
