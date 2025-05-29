const name = "Prince Sharma";
const age = 20;

// console.log(name + " is " + age + " years old."); // String concatenation

// console.log(`${name} is ${age} years old.`); // Template literals (string interpolation)

const gameName = new String("Chess is a game of strategy"); // String object

// console.log(gameName); // String object
// console.log(gameName[0]); // Accessing character at index 0

// console.log(gameName.__proto__)

// console.log(gameName.length); // Length of the string object

// console.log(gameName.toUpperCase()); // Convert to uppercase
// console.log(gameName.toLowerCase()); // Convert to lowercase

// console.log(gameName.charAt(0)); // Get character at index 0
// console.log(gameName.indexOf("e")); // Find index of character 'e'

const newString = gameName.substring(0, 4); // Extract substring from index 0 to 4
// console.log(newString); // "Ches"

const anotherString = gameName.slice(8, -8)
// console.log(anotherString);
// console.log(gameName.slice(0, 4)); // Extract substring from index 0 to 4

const newString2 = "      Prince Sharma      ";
// console.log(newString2) // newString2 with leading and trailing whitespace
// console.log(newString2.trim()); // Remove whitespace from both ends

const url = "https://www.example.com/prince%20sharma";

// console.log(url.replace("%20", " ")); // Replace '%20' with space
// console.log(url includes("example")); // Check if 'example' is in the URL

const newName = "Prince-Sharma";
// console.log(newName.split("-")); // Split string by '-'
