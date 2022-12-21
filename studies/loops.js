/**
 * LOOPS: - loops are a way for us to iterate over data a set number of times
 * 
 * a) FOR LOOPS - great for iterating over data in an array because we can use it to access an array's index values. Use the .length property on an array to get your loop stop condition.
 * 
 * 
 * b) WHILE LOOPS - great for iterating over a set number of times when you know the amount of times.
 * 
 * c) FOR IN LOOPS - great for iterating through an objects keys and or values.
 */

// FOR LOOPS

// The three types of loops we have learned about are for loops, while loops, and for in loops. Each have their own use cases and best practices.


// Lets say we want to print "Hello World" to the console five times. Instead of typing out console.log("Hello World") five times, we can use a for loop.

for (var i = 1; i <= 5; i++) {
    console.log('Hello World'); // prints 'Hello World' x5.
  }
  
// A for loop is comprised of 3 statements: start, stop, and update. Start defines a counting variable, stop defines a condition that when false exits the loop, and update defines how to increment or decrement the counting variable.
  
  var arr = [1,32,5,10,50,22,11];
  
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  
  console.log(sum); // prints 131.
  
// For this example we are using the .length property to return the number of indexes in the array to be used as our stop condition. Each iteration we are taking sum and adding the current array index's value to it. Now lets say we want to loop over a countdown from 1 - 10 but we want to do it backwards. For this example we will also be using a for loop.
  
  for (var i = 10; i > 0; i--) {
    console.log(i); // prints 10,9,8, etc.
  }
  
// In this loop we start at 10 and end at i > 0 so 1 and instead of incrementing i each loop we decrement i. Now moving onto the while loop. The while loop is great for iterating over something a set number of times. While for loops are great if you don't know the number of times you want to loop, while loops are great if you DO know.

// Now for the next example let's loop through an array backwards.

let arr2 = [10, 55, 98, 4, 31];

for (let i = arr2.length - 1; i >= 0; i--) {
  console.log(arr2[i]); // prints 31, 4, 98, 55, 10 to the console.
}
 
// WHILE LOOPS

  var arr3 = [10,5,44];
  
  
  while (arr3.length < 7) {
    arr3.push(Math.floor((Math.random() * 100)));
  }
  console.log(arr3); // prints [10, 5, 44, random1, random2,random3, random4].
  
// In this example we have an array with three values and are going to use a while loop with the condition of the array's length is less than seven. To prevent this from becoming an infinite loop, we will push a random number of 1 - 100 to the array each loop. As soon as the contents of the loop become falsy, the while loop stops. In this case, it stops after the array has seven values. For while loops it's easy to end up with an infinite loop so be careful!

// FOR IN LOOPS

// Lastly, we have a for in loop. For in loops are great for iterating over an object's keys or values. In this example we have an object called "michael" with three keys and three values. to loop over just the keys we can console.log the keys.
  
  var michael = {
    familyName: 'Gandolfi',
    age: 24,
    favColor: 'red'
  };
  
  for (var keys in michael) {
    console.log(); // prints familyName, age, favColor.
  }
  