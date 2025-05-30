// const tinderUser = new Object();
const tinderUser = {}; // Using object literal syntax

tinderUser.name = "PRINCE SHARMA";
tinderUser.age = 20;
tinderUser.isActive = true;

// console.log(tinderUser); // {}

const regularUser = { fullName: {firstName: "Prince", lastName: "Sharma"}, age: 20, isActive: true };

// console.log(regularUser.fullName.firstName); // Prince

const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};
const obj3 = {7: "seven", 8: "eight", 9: "nine"};

// Merging objects using Object.assign
const mergedObj = Object.assign({}, obj1, obj2, obj3);

// console.log(mergedObj); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine' }

// Merging objects using spread operator
const mergedObjSpread = {...obj1, ...obj2, ...obj3};

// console.log(mergedObjSpread); // Same output as mergedObj

const users = [
    { name: "Prince Sharma", age: 20, isActive: true },
    { name: "John Doe", age: 25, isActive: false },
    { name: "Jane Smith", age: 30, isActive: true }
]

// console.log(users[0].name); // Prince Sharma

// console.log(Object.keys(tinderUser)); // ['name', 'age', 'isActive']
// console.log(Object.values(tinderUser)); // ['PRINCE SHARMA', 20, true]
// console.log(Object.entries(tinderUser)); // [['name', 'PRINCE SHARMA'], ['age', 20], ['isActive', true]]

// console.log(tinderUser.hasOwnProperty("name")); // true
// console.log(tinderUser.hasOwnProperty("Location")); // false

const cource ={
    courceName: "JavaScript",
    courceDuration: "3 months",
    courcePrice: 1000,
}

// console.log(cource.courceName); // JavaScript

const { courceName } = cource;
// console.log(courceName); // JavaScript

const { courceDuration: duration } = cource;
// console.log(duration); // 3 months
