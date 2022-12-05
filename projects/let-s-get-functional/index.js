// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./michael-gandolfi.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    let males = _.filter(array, function(customer) {
        // checking if gender is male
        if (customer.gender === 'male') {
            return true
        } else {
            return false
        }
    });
    // returning the length of the new array
    return males.length;
};

var femaleCount = function(array) {
    let females = _.reduce(array, function(acc, c) {
        // determine if the current item in the array is female
        if (c.gender === 'female') {
            return acc + 1;
        } 
        return acc;
    }, 0);
    return females;
};

var oldestCustomer = function(array) {
    let oldest = _.reduce(array, function(acc, c) {
        // checking if the acc is greater than cc
        if (acc.age > c.age) {
            return acc;
        } else {
            return c;
        }
    });
    // returning the name of the oldest customer
    return oldest.name;
};

var youngestCustomer = function(array) {
    // checking if the acc is less than the c
    let youngest = _.reduce(array, function(acc, c) {
        if (acc.age < c.age) {
            return acc;
        } else {
            return c;
        }
    });
    // returning the name of the youngest customer
    return youngest.name; 
};

var averageBalance = function(array) {
    // creating avg variable
    let avg = _.reduce(array, function(acc, c) {
        // converting balance to a number
    let currentNumber = Number(c.balance.replace(/[$,]+/g,""))
    return acc += currentNumber;
    }, 0);
    // dividing acc by number of customers
    return avg / array.length;
};

//filter
var firstLetterCount = function(array, letter) {
    // filtering the friends array
    let letters = _.filter(array, function(customer) {
    // returning true if customer name starts with the letter
    return customer.name[0].toLowerCase() === letter.toLowerCase()
    });
    // returning length of the letters array
    return letters.length;
};


var friendFirstLetterCount = function(array, customer, letter) {
    // looping through the input array
    for (let i = 0; i < array.length; i++) {
        // checking to see if the current name is equal to the customer name
        if (array[i].name === customer) {
            // filtering through the friends array
            let friends = _.filter(array[i].friends, function(friend) {
                    // checking to see if friend name starts with the given letter
                    if (friend.name[0].toLowerCase() === letter.toLowerCase()) {
                        return true;
                    }
                }
            )
            // returning the length of the friends array
            return friends.length;
        }
    }
};


// filter
var friendsCount = function(array, name) {
    
};

var topThreeTags = function(array) {

};

var genderCount = function(array) {
    let genders = _.reduce(array, function(acc, c) {
        if (acc[c.gender]) {
            acc[c.gender] += 1;
        } else {
            acc[c.gender] = 1;
        }
        return acc;
    }, {});
    // returning gender object
    return genders;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
