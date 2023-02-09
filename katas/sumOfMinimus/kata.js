// #1
// function sumOfMinimums(arr) {
//     let sumMins = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sumMins += arr[i].sort((a, b) => a - b)[0];
//     }
//     return sumMins;
// }

// #2
// function sumOfMinimums(arr) {
//     return arr.map(i => i.sort((a,b)=>a-b)).reduce((acc, i) => acc + i[0], 0);
// }

// #3
// const sumOfMinimums = arr => arr.map(i => i.sort((a,b)=>a-b)).reduce((acc, i) => acc + i[0], 0);

// #4
const sumOfMinimums = arr => arr.reduce((acc, i) => acc + i.sort((a, b) => a - b)[0], 0);

console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));
console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));
console.log(sumOfMinimums([[28, 31], [113, 67]]));