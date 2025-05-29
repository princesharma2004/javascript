// array

const myArr = [1, 2, 3, 4, 5];
const myHeros = ["IronMan", "Thor", "Doctor Strange", "Wolverine", "Deadpool", "Scarlet Witch"];
const myArr2 = new Array(1, 2, 3, 4, 5); // not recommended, use array literal syntax

// console.log(myArr); // [1, 2, 3, 4, 5]
// console.log(myArr[0]); // 1

// Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0); // adds an element at the beginning
// myArr.shift(); // removes the first element

// console.log(myArr.includes(3)); // true, checks if 3 is in the array
// console.log(myArr.indexOf(3)); // 2, returns the index of 3 in the array

// console.log(myArr); // [0, 1, 2, 3, 4, 5]

const newArr = myArr.join()
// console.log(newArr); // "1,2,3,4,5"

// slice and splice
console.log("A", myArr)

const slicedArr = myArr.slice(1, 3); // returns a new array from index 1 to index 3 (exclusive)

console.log("Sliced Arr", slicedArr); // [2, 3]
console.log("B", myArr); // [2, 3]

const splicedArr = myArr.splice(1, 3); // removes 3 elements from index 1 and returns them
console.log("Spliced Arr", splicedArr); // [2, 3, 4]
console.log("C", myArr); // [1, 5]
