/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// assigning variable animal to an object literal
var animal = {}

// adding species and name using dot notation and bracket notation
animal.species = 'dog'
animal['name'] = 'Raven'

// Assigning an empty array to the animal object
animal.noises = []


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Assigning an empty array to the noises variable
var noises = []

// Adding four different noises a dog might make
noises[0] = "grr"
noises.push("bark")
noises.unshift("squeek")
noises[noises.length] = "ruff"


// Logging results 
console.log(noises.length)
console.log(noises[noises.length - 1])
console.log(noises)

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Assigning animal noises to noises array
animal['noises'] = noises

// Adding a fith noise to the array
animal.noises.push('squeel')

console.log(animal)

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Assigning variable animals to an empty arrau
var animals = []

// Pushing animal to the animals array
animals.push(animal)


// Creating three other animals to be added to the animals array
 var duck = {
  species: "duck",
  name: "Jerome",
  noises: ['quack', 'honnk', 'sneeze', 'woosh']
 }

 var cat = {
  species: "cat",
  name: "Mimi",
  noises: ['meow', 'hiss', 'grr', 'purr']
 }

 var pig = {
  species: "pig",
  name: "Wilbert",
  noises: ['squeel', 'grrr', 'eeeek', 'errr']
 }
 animals.push(duck)
animals.push(cat)
animals.push(pig)
 console.log(animals)
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// an array is good since it can store other arrays and objects

// Assigning variable friends to an empty array
var friends = []


// A function that returns a random index
function getRandom(arr) {
  return Math.floor(Math.random()*arr.length)
}

// Pushing the random animal name to the friends array
friends.push(animals[getRandom(animals)].name)

console.log(friends)

// Assigning the friends array to a random animal
animals[getRandom(animals)].friends = friends

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}