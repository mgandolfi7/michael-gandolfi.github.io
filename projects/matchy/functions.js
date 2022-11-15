/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

const { stubArray } = require("lodash")

const { animals } = require("./data");

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Implementing a function search to search animals the array
function search(arr, searchTerm) {
    var found = arr.find(i => i.name === searchTerm)
    if (found !== undefined) {
        return found
    } else {
        return null
    }
    
}

console.log(search(animals, "Mimi"))

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(arr, searchTerm, replacementObj) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === searchTerm) {
            arr[i] = replacementObj
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(arr, searchTerm) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name === searchTerm) {
            arr.splice(i, 1)
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(arr, newObj) {
    var itemExists = false

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name.toLowerCase() === newObj.name.toLowerCase()) {
            itemExists = true
        }
    }

if (itemExists === false && newObj.name.length > 0 && newObj.species.length > 0) {
    arr.push(newObj)
}

}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
