// singlton
// Object.create

// Object literals
const mysym = Symbol("mySymbol");

const jsUser = {name : "Prince Sharma", [mysym]: "mySymbol", age: 25, isActive: true, skills: ["JavaScript", "React", "Node.js"]};

// console.log(jsUser.name);
// console.log(jsUser["age"]);
// console.log(jsUser[mysym]);

// Object.freeze(jsUser); // Prevents any changes to the object
jsUser.name = "John"; // This will not change the name property

// console.log(jsUser); // Still "Prince Sharma" if object is frozen

jsUser.hello = function() {
    console.log("Hello from jsUser");
}

jsUser.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

// console.log(jsUser.hello); // [Function: hello]
// console.log(jsUser.hello()); // Hello from jsUser
// jsUser.greet(); // Hello, my name is Prince Sharma
