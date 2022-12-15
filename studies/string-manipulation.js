/**
 * STRING MANIPULATION:
 * 
 * a) WITH OPERATORS - allow us to concatenate two strings together using the '+' operator.
 * 
 * b) WITH STRING METHODS - allow us to modify and manipulate strings with built in methods.
 * 
 */

// WITH OPERATORS

// concatenating a string with the '+' operator
let firstName = 'Michael';
let lastName = 'Gandolfi';

console.log(firstName + ' ' + lastName); // returns 'Michael Gandolfi' as a single string


// WITH STRING METHODS

// using the .length method.
let favFood = 'pizza'
console.log(favFood.length); // logs 5.

// using .slice() to extract a part of a string and return the extracted part in a new string.
let string = 'Lorem ipsum dolor.';
console.log(string.slice(5, 11)); // logs 'ipsum.'

// using .replace() to replace a word in a string.
let string2 = 'The quick brown fox jumped over the lazy dog.';
console.log(string.replace('quick', 'slow')); // logs 'The slow brown fox jumped over the lazy dog.'

// using .charAt to extract a character from a string.
let string3 = 'I will become a Software Engineer';
console.log(string3.charAt(0)); // logs 'I.'

// converting a string to an array using .split().
let string4 = 'Look at me, I will be an array now!';
console.log(string4.split(" ")); // logs ["Look", "at", "me" "..."].




