/**
 * DATA TYPES: variables can hold different data types in JavaScript.
 * 
 * a) number - can either be whole or decimal.
 * 
 * b) string - any text. Must be in double quotes ("") or single qoutes(''),
 * 
 * c) boolean - can either be true or false.
 * 
 * d) array - useful as a storage of other data. Can store numbers, strings, booleans, other arrays, objects, and functions. must be in brackets ([]). Array items are separated by commas.
 * 
 * e) object - used to store key/value pairs as well as methods. Key/value pairs are separated by a comma. 
 * 
 * f) function - a block of code designed to perform a particular task. Must be called to be executed. 
 * 
 * g) undefined - any variable that has not been assigned a value is undefined.
 * 
 * h) null - indicates that a variable points to no object. Unlike undefined, null is an assignment value.
 * 
 * i ) NaN - represents Not-a-Number. 
 * 
 * j) infinity and -infinity - numeric values representing infinity and negative infinity.
 * 
 * k) primitive vs complex data types - primitive values are passed to a function by copy and complex values are passed to a function by reference.
 */

// CODE EXAMPLES:

// a whole numnber assigned to a variable.
let x = 5;

// a decimal number assigned to a variable.
let y = 5.5;

// a string assigned to a variable.
let message = 'hello, Michael!';

// a boolean assigned to a variable.
let ateBreakfast = false;

// an array assigned to a variable.
let data = [55, 'fifty-five', true, [10,20,30], {name: 'Michael', age: '24'}];

// an object assigned to a variable.
let michael = {
    nameFirst: 'Michael',
    nameLast: 'Gandolfi',
    favFood: 'pizza',
    age: 24
};

// a simple function that logs a string of text to the console.
function greeting() {
    console.log('good afternoon!');
}

greeting();

// calling a variable before it is initialized using var.
console.log(z); // will log undefined because z has not been initialized yet.
var z = 20;

// setting a variable equal to null.
let currentWeather = null;

// multiplyig a string by a number to get NaN.
let j = 20;
let k = 'Michael';

console.log(j * k); // returns NaN.

// multiplying a number by infinity
let l = 10;
let m = Infiniy;

console.log(l * m); // will log Infinity to the console.

// multiplying a number by negative infinity
let n = 20;
let o = -Infinity;

console.log(n * o); // will log -Infinity to the console.