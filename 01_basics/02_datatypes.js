"use strict"; // treat all JS code as newer version

//alert(3 + 3) // we are using node.js, not browser, so no alert

console.log(3
    +
    3) // bad practice, but works in JS, decreases readability

console.log("Hello World")

let name = "Prince Sharma"
let age = 20
let isLoggedIn = false
let state; // variable is declared but not initialized, so it is undefined
let nullVariable = null // variable is explicitly set to null

// number => 2 to the power of 53, 2^53
// BigInt => 2^53 to 2^64
// string => "Hello World", "Prince Sharma"
// boolean => true/false
// undefined => variable is declared but not initialized
// null => variable is explicitly set to null
// symbol => unique and immutable value, often used as object property keys

// objects

console.log(typeof "Hello World")
console.log(typeof null)
