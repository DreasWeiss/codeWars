// #1
// function solve(s) {
//     return s.split(/[a-zA-Z]/gi)
//             .map(i=>+i)
//             .sort((a,b)=>b-a)[0];
// };


// #2
solve = s => Math.max(...s.match(/\d+|$/g))

console.log(solve('gh12cdy695m1'));//695
console.log(solve('2ti9iei7qhr5'));//  9
console.log(solve('vih61w8oohj5'));// 61
console.log(solve('f7g42g16hcu5'));// 42
console.log(solve('lu1j8qbbb85'));// 85