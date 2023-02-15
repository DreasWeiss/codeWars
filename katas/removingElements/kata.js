// // #1
// function removeEveryOther(arr) {
//     const newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (i === 0 || i % 2 === 0) {
//             newArr.push(arr[i]);
//         }
//     }

//     return newArr
// }

// // #2
// function removeEveryOther(arr) {
//     const newArr = arr.filter((i, idx) => idx % 2 == 0)
//     return newArr
// }

// #3
const removeEveryOther = a => a.filter((i, idx) => idx % 2 === 0);

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again']
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [1, 3, 5, 7, 9]
console.log(removeEveryOther([[1, 2]])); // [[1, 2]]
console.log(removeEveryOther([['Goodbye'], { 'Great': 'Job' }])); // [['Goodbye']])