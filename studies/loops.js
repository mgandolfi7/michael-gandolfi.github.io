/**
 * LOOPS:
 * 
 * a) Loops are a way for us to iterate over data a set number of times
 * 
 * b) For Loops: 
 *      1) Great for iterating over data in an array because we can use it to access an array's index values 
 *      2) use the .length property on an array to get your loop stop condition
 * 
 * 
 * c) While Loops:
 *      1) Great for iterating over a set number of times when you know the amount of times
 * 
 * d) For In Loops:
 *      1) great for iterating through an objects keys and or values
 * 
 */

// The three types of loops we have learned about are for loops, while loops, and for in loops. Each have their own use cases and best practices.

// Now on to some examples

// Lets say we want to print "Hello World" to the console five times. Instead of typing out console.log("Hello World") five times, we can use a for loop.

for (var i = 1; i <= 5; i++) {
    console.log('Hello World') // prints 'Hello World' x5
  }
  
// Looking inside the parenthesis, it is important to initialize i with the var keyword. It is common practice to use i or "index" for the loop but it will work with any variable name. i = 1 is the starting point of the loop, i <= 5 is the ending point of the loop, and i++ is our counter. In this example every loop or iteration, 1 is added to i until it reaches 5. Now lets say we want to loop over an array of numbers and get the sum.
  
  var arr = [1,32,5,10,50,22,11]
  
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i]
  }
  
  console.log(sum) // prints 131
  
// For this example we are using the .length property to return the number of indexes in the array to be used as our stop condition. Each iteration we are taking sum and adding the current array index's value to it. Now lets say we want to loop over a countdown from 1 - 10 but we want to do it backwards. For this example we will also be using a for loop.
  
  for (var i = 10; i > 0; i--) {
    console.log(i) // prints 10,9,8, etc.
  }
  
// In this loop we start at 10 and end at i > 0 so 1 and instead of incrementing i each loop we decrement i. Now moving onto the while loop. The while loop is great for iterating over something a set number of times. While for loops are great if you don't know the number of times you want to loop, while loops are great if you DO know.
  
  var arr2 = [10,5,44]
  
  
  while (arr2.length < 7) {
    arr2.push(Math.floor((Math.random() * 100)))
  }
  console.log(arr2) // prints [10, 5, 44, random1, random2,random3, random4]
  
// In this example we have an array with three values and are going to use a while loop with the condition of the array's length is less than seven. To prevent this from becoming an infinite loop, we will push a random number of 1 - 100 to the array each loop. As soon as the contents of the loop become falsy, the while loop stops. In this case, it stops after the array has seven values. For while loops it's easy to end up with an infinite loop so be careful!
  
// Lastly, we have a for in loop. For in loops are great for iterating over an object's keys or values. In this example we have an object called "michael" with three keys and three values. to loop over just the keys we can console.log the keys.
  
  var michael = {
    familyName: 'Gandolfi',
    age: 24,
    favColor: 'red'
  }
  
  for (var keys in michael) {
    console.log() // prints familyName, age, favColor
  }
  