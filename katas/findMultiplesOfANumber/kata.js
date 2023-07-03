// #1
// function findMultiples(integer, limit) {
//     let arr = [];
//     let int = integer;
//     while ( int <= limit) {
//         arr.push(int);
//         int+=integer;
//     }
//     return arr;
// }


// #2
// function findMultiples(int, limit) {
//     return Array.from({length: parseInt(limit/int)}, (_,i)=> (i+1)*int )
// }



// #3
const findMultiples = (n, l) => Array.from({ length: ~~(l / n) }, (_, i) => i * n + n);

console.log(findMultiples(5, 25)); // [5, 10, 15, 20, 25]
console.log(findMultiples(1, 2)); // [1, 2]
console.log(findMultiples(5, 7)); // [5]
console.log(findMultiples(4, 27)); // [4, 8, 12, 16, 20, 24]
console.log(findMultiples(11, 54)); // [11, 22, 33, 44]
