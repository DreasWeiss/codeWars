// #1
// function findDifference(a, b) {
//     let A = a.reduce((acc, i) => acc*i,1);
//     let B = b.reduce((acc, i) => acc*i,1);
//     return A >= B ? A - B: B - A;
// }


// #2
// function findDifference(a, b) {
//     return Math.abs(a.reduce((acc, i) => acc*i,1) - b.reduce((acc, i) => acc*i,1));
// }


// #3
const findDifference = (a, b) => Math.abs(a.reduce((acc, i) => acc * i, 1) - b.reduce((acc, i) => acc * i, 1));



console.log(findDifference([3, 2, 5], [1, 4, 4])) //, 14);
console.log(findDifference([9, 7, 2], [5, 2, 2])) //, 106);
console.log(findDifference([11, 2, 5], [1, 10, 8])) //, 30);
console.log(findDifference([4, 4, 7], [3, 9, 3])) //, 31);
console.log(findDifference([15, 20, 25], [10, 30, 25])) //, 0);