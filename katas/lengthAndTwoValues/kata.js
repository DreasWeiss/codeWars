// #1
// function alternate(n, firstValue, secondValue) {
//     let arr = [];
//     let i = 0;
//     while (i < n) {
//         if (i % 2 === 0) {
//             arr.push(firstValue);
//         } else {
//             arr.push(secondValue);
//         }
//         i++;
//     }
//     return arr;
// }


// #2
function alternate(n, firstValue, secondValue) {
    return Array.from({ length: n }, (_, i) => i % 2 === 0 ? firstValue : secondValue);
}


console.log(alternate(5, true, false));
// [true, false, true, false, true])

console.log(alternate(20, 'blue', 'red'));
// ['blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red', 'blue', 'red']

console.log(alternate(0, "lemons", "apples"));
  // []