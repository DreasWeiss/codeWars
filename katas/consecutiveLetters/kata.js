// function solve(s) {
//     let abc = Array.from(Array(26).keys())
//     let arr = s.split('').map(i=>i.charCodeAt()-97).sort((a,b)=>a-b);
//     return abc.splice(arr[0], arr.length).join('')===arr.join('');
// }


// #2
const solve = s =>
    `abcdefghijklmnopqrstuvwxyz`.includes([...s].sort().join(``));

console.log(solve("abc")); //true
console.log(solve("abd")); //false
console.log(solve("dabc")); //true
console.log(solve("abbc")); //false