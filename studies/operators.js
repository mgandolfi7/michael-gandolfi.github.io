/**
 * OPERATORS: operators allow us to perform artithmatic operations, compare, and assign.
 * 
 * a) ASSIGNMENT OPERATORS - allow us to assign values to variables.
 * 
 * b) ARITHMATIC OPERATORS - used to perform artithmatic on numbers in JavaScript.
 * 
 * c) COMPARISON OPERATORS - used to compare different variables or values.
 * 
 * d) LOGICAL OPERATORS - used to determine the logic between variables or values.
 * 
 * e) UNARY OPERATORS - an operation with only one operand.
 * 
 * f) TERNARY OPERATORS - an operation that takes three operands: a condition followed by a question mark, then an expression to execute if condition is truthy and finally an expression to execute if the condition is falsy.
 * 
 */

// ASSIGNMENT OPERATORS

// assigning a value to a variable.
let a = 10;
console.log(a) // retuns 10.

// assigning and adding a value to a variable.
let b = 5;
console.log(b += 5) // returns 10.

// assigning an subtracting a value from a variable.
let c = 1;
console.log(c -= 1); // returns 0.
// assigning an multiplying a value with a variable.
let d = 5;
console.log(d *= 2); // returns 10. 

// assigning and dividing a value with a variable.
let e = 20;
console.log(e /= 10); // returns 2. 

// assigning an returning the remainder of two numbers divided into eachother.
let f = 30;
console.log(f %= 10); // returns 0. 

// assigning and returning the power of a number.
let g = 3;
console.log(g **3) // returns 27.

// ARITHMETIC OPERATORS

// assigning and adding two variables together.
let h = 10;
let i = 5;
console.log(h + i); // returns 15.

// assigning and subtracting two variables from eachother.
let j = 5;
let k = 3;

console.log(j - k); // returns 2.

// assigning and multiplying two variables together.
let l = 6;
let m = 10;

console.log(l * m); // returns 60.

// assigning and dividing two variables.
let n = 10;
let o = 5;

console.log(n / o); // returns 2.

// assigning and getting the remainder of two variables.
let p = 20;
let q = 2;

console.log(p % q); // returns 0.

// assigning and incrementing a variable.
let r = 15;
r++
console.log(r) // returns 16.

// assigning and decrementing a variable.
let s = 30;
s--;
console.log(s); // return 29.

// COMPARISON OPERATORS

// checking if two variables are equal in value.
console.log(5 == '5'); // returns true.

// checking if two variables are equal in type and value.
console.log(5 === '5'); // returns false.

// checking if two variables are not equal.
console.log(10 !== 9); // returns true.

// checking if a variable is greater than another variable.
console.log(3 > 10); // returns false.

// checking if a variable is less than another variable.
console.log(3 < 10); // returns true.

// checking if a variable is greater than or equal to another variable.
console.log(13 >= 13); // returns true.

// checking if a variable is less than or equal to another variable.
console.log(15 <= 15); // returns true.

// LOGICAL OPERATORS

// checking if two values are both truthy.
let t = 40;

console.log(t > 10 && t < 30); // returns false.

// checking if at least one value is truthy.
let u = 40;
console.log(u > 10 || u < 30); // returns true.

// UNARY OPERATORS

// using the unary plus operator to convert the operand into a number.

let string = '44';

let number = +string;

console.log(number); // number is now 44 since the unary operator converts it to a number.


// using the unary minus operator to convert the operand into a number and negating it.

let string2 = '30';

let number2 = -string2; 

console.log(number2); // number2 is now -30 since the unary operator converts it to a number and then negates it.

// incrementing a variable using the ++ operator.

let count = 5;

count++;

console.log(count) // count is now 6.

// decrementing a variable using the -- operator.

let count2 = 4;

count--;

console.log(count); // count is now 3.

// comparing two values using the logical NOT operator.

const var1 = 5;
const var2 = 10;

console.log(!(var1 > var2)); // will log true to the console since the logical NOT checks if something is not true.

// TERNARY OPERATOR

// checking if a condition is true and executing either functionA or functionB.
let v = 30;

v > 20 ? functionA() : functionB() // will execute functionA because the expression evaluates to true.