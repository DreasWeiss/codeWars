// #1
// var cubeChecker = function (volume, side) {
//     return volume > 0 && side > 0 ? volume === Math.pow(side,3):false;
// };


// #2
var cubeChecker = function (volume, side) {
    return volume === Math.pow(side, 3) && side > 0;
};


console.log(cubeChecker(56.3, 1)); // false
console.log(cubeChecker(-1, 2)); // false
console.log(cubeChecker(8, 3)); // false
console.log(cubeChecker(8, 2)); // true
console.log(cubeChecker(-8, -2)); // false
console.log(cubeChecker(0, 0)); // false
console.log(cubeChecker(1, 5)); //  false
console.log(cubeChecker(125, 5)); // true
console.log(cubeChecker(125, -5)); // false