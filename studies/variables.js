/**
 * VARIABLES: variables are JavaScript's way or storing data/values.
 * 
 * a) DECLARATION AND ASSIGNMENT - variables must first be declared and then assigned. This can happen on the same line or separate lines.
 * 
 * b) VAR, LET, AND CONST - to declare a variable, use var, let or const. Var is the original way to declare variables that are available to the entire program or function. With ES6 let and const were added to JavaScript because programmers wanted a way to declare variables that would be block scoped. Block scope means that any variables initialized within a block of code can only be accessed within that block (more on that below). Const is for variables that are meant to never change (constant).
 * 
 * c) HOISTING - before code execution, variables and functions are moved to the top of their scope. Var variables are initialized with a value of undefined while let and const are not initialized. Declarations are hoisted and initializations are not.
 */

// DECLARATION AND ASSIGNMENT

// declaring a variable using var without assigning it to a value (initializing it).
var message; 
console.log(message); // logging it will print undefined since the variable has no value.

// declaring a variable using and assigning it to a value on the same line.
var message = 'good morning!';

// VAR LET AND CONST

// declaring a variable within a block scope using let
for (let i = 0; i < 5; i++) {
    // code to be executed.
}

console.log(i) // will throw an ReferenceError because i is not defined outside the if statement block.

// now let's look at the same example using var
for (var j = 0; j < 5; j++) {
    // code to be executed.
}

console.log(j) // will log 5 to the console since variables declared using var are available to the entire program.

// however, let's see what happens when we console.log(j) before the for loop.
console.log(j) // will log undefined since the variable is available but it has not been defined yet.
for (var j = 0; j < 5; j++) {
    // code to be executed.
}

// declaring a variable using const and then trying to reassign it.
const pi = 3.14;

pi = 4 // will throw a TypeError since you can't re-assign a constant variable.

// declaring a variable using let and then trying to reassign it.

let height = 100;

height = 50; // will work since let can be reassigned.

// declaring a variable using const and trying to redeclare it.

const circumference = 30.8;

const circumference = 40.9; // will throw an error saying circumference has already been declared.

// declaring a variable using let and trying to redeclare it.

let width = 20;

let width = 30; // will throw an error saying width has already been declared.

// HOISTING

console.log(x); // will log undefined since var is "hoisted" to memory but it has not been defined yet.

var x = 5;

// what happens with var and const and hoisting.

console.log(y); // will throw a reference error because you cannot access 'y' before initialization. Variables declared using let or const do NOT get hoisted.

let y = 10;

// what happens with hoisting and functions.
stepOne(); // will log 'step one' to the console because functions are hoisted.

function stepOne() {
    console.log('step one');
}

// now lets see what happens with an anonymous arrow function.
stepTwo(); // will throw a reference error because you cannot access stepTwo before initialization.

const stepTwo = () => {
    console.log('step two');
}