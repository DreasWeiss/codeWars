// #1
// function climb(n) {
//     // ...
//     let arr = [];
//     while (n>=1) {
//         arr.push(n);
//         n = Math.floor(n/2);
//     }

//     return arr.reverse();
// }


// #2
const climb = n => !n ? [] : [...climb(n >> 1), n];


console.log(climb(1)); // [1]
console.log(climb(10)); // [1, 2, 5, 10]
console.log(climb(13)); // [1, 3, 6, 13]