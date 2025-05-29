const marvelHeros = ["IronMan", "Thor", "Doctor Strange", "Wolverine", "Deadpool", "Scarlet Witch"];
const dcHeros = ["Batman", "Superman", "Wonder Women", "Flash", "Aquaman", "Green Lantern"];

// marvelHeros.push(dcHeros); // adds the entire dcHeros array as a single element

// marvelHeros.push(...dcHeros); // adds each element of dcHeros to marvelHeros

// const allHeros = marvelHeros.concat(dcHeros) // combines both arrays into a new array
// console.log(allHeros)

const allNewHeros = [...marvelHeros, ...dcHeros]; // using spread operator to combine arrays
// console.log(allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10]]]; // nested arrays
const realAnotherArr = anotherArr.flat(Infinity); // flattens the array to a single level

// console.log(realAnotherArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(Array.isArray("Prince Sharma")); // false, checks if the value is an array
// console.log(Array.from("Prince")); // ['P', 'r', 'i', 'n', 'c', 'e'], converts a string to an array
// console.log(Array.from({name: "Prince Sharma"})); // converts an object to an array, but since the object has no iterable properties, it returns an empty array

let score1 =100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); // [100, 200, 300]
