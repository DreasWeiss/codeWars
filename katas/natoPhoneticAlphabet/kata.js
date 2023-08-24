var nato = (function () {
    var letters = {
        "A": "Alpha", "B": "Bravo", "C": "Charlie",
        "D": "Delta", "E": "Echo", "F": "Foxtrot",
        "G": "Golf", "H": "Hotel", "I": "India",
        "J": "Juliett", "K": "Kilo", "L": "Lima",
        "M": "Mike", "N": "November", "O": "Oscar",
        "P": "Papa", "Q": "Quebec", "R": "Romeo",
        "S": "Sierra", "T": "Tango", "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
    }

    return function (word) {
        return word.toUpperCase()
            .split('')
            .map(i => letters[i])
            .join(' ')
    }
})()


console.log(nato("hi"));
console.log(nato("abc"));
console.log(nato("babble"));
console.log(nato("Banana"));

// // !!! --- !!!
// // tests => uncomment with one '//'
// //
// // Since Node 10, we're using Mocha.
// // You can use `chai` for assertions.
// const chai = require("chai");
// const assert = chai.assert;
// // Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// // Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// // Uncomment the following to use the old assertions:
// // const Test = require("@codewars/test-compat");

// describe("Solution", function() {
//   it("should test for something", function() {
//     Test.assertEquals(1 + 1, 2);
//     assert.strictEqual(1 + 1, 2);
//   });
// });