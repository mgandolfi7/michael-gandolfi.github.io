/**
 * FUNCTIONS: a function is a block of code designed to perform a particilar task.
 * 
 * a) TWO PHASES: a function must be defined before it is executed.
 * 
 * b) FUNCTION PARAMETERS VS. ARGUMENTS: a function's parameters are names listed in the function's definition while function argument are the values we pass to the function.
 * 
 * c) ASSIGNING A FUNCTION TO A VARIABLE: functions can be assigned to a variable.
 * 
 * d) SCOPE: variables declared inside a function are only accessible within that function.
 * 
 * e) CLOSURES: inner functions have access to parent function's variables.
 * 
 */

// TWO PHASES OF A FUNCTION

// how to define a function.
function multiply(a, b) {
    return a * b;
};

// how to invoke a function.
multiply(10, 20); // returns 200.

// FUNCTION PARAMETERS VS. ARGUMENTS

function subtract(a, b) { // a and b are parameters of the function.
    return a - b;
};

subtract(50, 25); // 50 and 25 are arguments we pass into the function.

// ASSIGNING A FUNCTION TO A VARIABLE

let myFunction = function(a, b) {
    return a / b;
};

myFunction(100, 10); // invoking the function by referencing its variable name.

// FUNCTION SCOPE

// declaring a variable inside a function.
function addition(a, b) {
    let result = a + b; // result is only accessable within the scope of the function.
    return result;
}

// FUNCTION CLOSURES

// declaring a variable inside am inner function
function operatingSystem() {
    var userName = 'mgandolfi'; // local variable.

    function logIn() {
        console.log(userName); // userName variable is able to be accessed within the inner function aka a closure.
    }
    logIn();

}
operatingSystem(); // mgandolfi will be printed to the console.





