/**
 * DATA TYPES: variables can hold different data types in JavaScript.
 * 
 * a) NUMBER - can either be whole or decimal.
 * 
 * b) STRING - any text. Must be in double quotes ("") or single qoutes(''),
 * 
 * c) BOOLEAN - can either be true or false.
 * 
 * d) ARRAY - useful as a storage of other data. Can store numbers, strings, booleans, other arrays, objects, and functions. must be in brackets ([]). Array items are separated by commas.
 * 
 * e) OBJECT - used to store key/value pairs as well as methods. Key/value pairs are separated by a comma. 
 * 
 * f) FUNCTION - a block of code designed to perform a particular task. Must be called to be executed. 
 * 
 * g) UNDEFINED - any variable that has not been assigned a value is undefined.
 * 
 * h) NULL - indicates that a variable points to no object. Unlike undefined, null is an assignment value.
 * 
 * i ) NaN - represents Not-a-Number. 
 * 
 * j) INFINITY and -INFINITY - numeric values representing infinity and negative infinity.
 * 
 * k) PRIMITIVE VS COMPLEX DATA TYPES - primitive values are passed to a function by copy and complex values are passed to a function by reference. Primitive values are atomic, immutable, measing they do not hold, collect, or aggregate other values. Operations on primitive types return new primitive values but do not alter the original value. Complex values aggregate other values and therefore are indefinite in size. When assigning or passing a complex data type, they are copy by reference.
 */

// NUMBER

// a whole numnber assigned to a variable.
let x = 5;

// a decimal number assigned to a variable.
let y = 5.5;

// STRING

// a string assigned to a variable.
let message = 'hello, Michael!';

// BOOLEAN

// a boolean assigned to a variable.
let ateBreakfast = false;

// ARRAY

// an array assigned to a variable.
let data = [55, 'fifty-five', true, [10,20,30], {name: 'Michael', age: '24'}];

// OBJECT

// an object assigned to a variable.
let michael = {
    nameFirst: 'Michael',
    nameLast: 'Gandolfi',
    favFood: 'pizza',
    age: 24
};

// FUNCTION

// a simple function that logs a string of text to the console.
function greeting() {
    console.log('good afternoon!');
}

greeting();

// UNDEFINED

// calling a variable before it is initialized using var.
console.log(z); // will log undefined because z has not been initialized yet.
var z = 20;

// NULL

// setting a variable equal to null.
let currentWeather = null;

// NAN
// multiplyig a string by a number to get NaN.
let j = 20;
let k = 'Michael';

console.log(j * k); // returns NaN.

// INFINITY

// multiplying a number by infinity
let l = 10;
let m = Infiniy;

console.log(l * m); // will log Infinity to the console.

// -INFINITY

// multiplying a number by negative infinity
let n = 20;
let o = -Infinity;

console.log(n * o); // will log -Infinity to the console.

// PRIMITIVE VS. COMPLEX DATA TYPES

// there are 6 primitive data typess.

// number primitive type for numeric data.
let num = 20;

// string data type for character data.
let str = 'Michael Gandolfi';

// boolean data type for true or false.
let bool = true;

// NaN (Not a Number).
let nan = 'hello';

console.log(nan * 10); // will return NaN since we can't multiply a number with a string.

// undefined for values that are not initialized or have no value.
let var1;

console.log(var1); // will print undefined since we did not give the variable a value.

// null for no values that are intentionally nullified by a programmer.
let null1 = null;

// primitive types are atomic and immutable.
var age = 24; // there is only ever a single value in number.

// operations on primitive types return new primitives.

let firstName = 'Michael';
let fullName = firstName + 'Gandolfi';

console.log(firstName); // will log Michael to the console.
console.log(fullname); // will log Michael Gandolfi to the console.

// arrays and objects can have any number of elements now or later.

let arr = [10, 28, 440, 87];
arr.push(11, 13); 

console.log(arr); // arr is now [10, 28, 440, 87, 11, 13].

// primitive types are copy by reference. 

let a = 10; 
let b = a; // the value stored in a is copied into b.

let c = {one: 'foo'};

let d = c;

d.one = 'bar';
console.log(a.one); // will log bar since complex types are copy by reference.