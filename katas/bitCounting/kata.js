// #1
// var countBits = function (n) {
//     return Array.from(n.toString(2)).filter(i=>i==='1').length
// };


// #2
countBits = n => n.toString(2).split('0').join('').length;


console.log(countBits(0)); // 0
console.log(countBits(4)); // 1
console.log(countBits(7)); // 3
console.log(countBits(9)); // 2
console.log(countBits(10)); // 2