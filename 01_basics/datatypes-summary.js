// Primitive
// 7 types: string, number, boolean, null, undefined, symbol, bigint

let primitiveString = "Hello, World!"; // string
let primitiveNumber = 42; // number
let primitiveBoolean = true; // boolean
let primitiveNull = null; // null
let primitiveUndefined; // undefined
let primitiveSymbol = Symbol('unique'); // symbol
let primitiveBigInt = 12345678901234567890n; // bigint

// Reference (Non-primitive)
// 3 type: array, object, function

let referenceArray = [1, 2, 3, 4, 5]; // array
let referenceObject = { name: "Alice", age: 30 }; // object
let referenceFunction = function() { console.log("Hello from function!"); }; // function

// console.log(typeof noVariable); // undefined

// ++++++++++++++++++++++++++++++++

// Stack (Primitive types), Heap (Reference types)

let firstName = "Prince"

let name = firstName
name = "Prince Sharma"

// console.log(firstName)
// console.log(name)

let person = {
    firstName: "Prince",
    lastName: "Sharma"
};

let anotherPerson = person;
anotherPerson.firstName = "John";

console.log(person.firstName); // John
console.log(anotherPerson.firstName); // John
