/**
 * CONTROL FLOW: when you write code, you may want to perform different actions based on different conditions. Enter conditional statements.
 * 
 * a) if - tests a specific condition to be true or false and if true, the block of code executes. If false it either moves on if there is/are else statements or stops.
 * 
 * b) else - used with an if statement to execute a block of code if the condition from the previous if statement is false.
 * 
 * c) else if - also used with an if statement and can be used with an else if statment. It executes if a second condition is true. If not, it either stops or moves on to the else statment
 * 
 * d) switch - simmilar to if else chains, it tests whether a particular condition is true or false. Can also be chained with multiple switch cases. Remember to include a break after each switch case. Can also have a default case if none of the above cases are true just like an else statement.
 * 
 */


// if statements
var color = 'red';

if (color === 'red') {
    console.log('the color you picked is red') // will log to the console because the statement is true
}

if (color === 'black') {
    console.log('the color you picked is black') // will not log anything to the console because the statement is false
}

// if else
if (color === 'green') {
console.log('the color you picked is green')
} else {
    console.log('the color you picked is NOT green') // will log to the console since the if condition is false
}

// else if
if (color === 'purple') {
    console.log('the color you picked is purple')
} else if (color === 'red') {
    console.log('the color you picked is red') // will log to the console since the first if statement is false but the else if is true
}

// switch statements
switch (color) {
    case 'red':
        console.log('the color you picked is red');
        break;
    case 'blue':
        console.log('the color you picked is blue');
        break;
    case 'black':
        console.log('the color you picked is black');
        break; 
    default:
        console.log('the color you picked is not red, blue, or black');
}