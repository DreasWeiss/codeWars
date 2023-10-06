// #1
// function countRedBeads(n) {
//     let redC = 0;

//     while (n >= 2) {
//         redC += 2;
//         n -= 1;
//     }

//     return redC;
// }


// #2
function countRedBeads(n) {
    return n < 2 ? 0 : 2 * n - 2;
}

console.log(countRedBeads(0));// 0
console.log(countRedBeads(1));// 0
console.log(countRedBeads(3));// 4
console.log(countRedBeads(5));// 8