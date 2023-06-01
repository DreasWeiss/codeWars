// #1
// function solve(arr) {
//     let a = [];
//     for (let i = arr.length-1; i >= 0; i--){
//         if (!a.includes(arr[i])){
//             a.push(arr[i]);
//         }
//     }
//     return a.reverse();
// }


// #2
// function solve(arr) {
//     return Array.from(new Set(arr.reverse())).reverse();
// }


// #3
function solve(arr) {
    return arr.filter((i, idx) => arr.lastIndexOf(i) === idx);
}


console.log(solve([3, 4, 4, 3, 6, 3])); //[4,6,3]
console.log(solve([1, 2, 1, 2, 1, 2, 3])); //[1,2,3]
console.log(solve([1, 2, 3, 4])); //[1,2,3,4]
console.log(solve([1, 1, 4, 5, 1, 2, 1])); //[4,5,2,1]
console.log(solve([1, 2, 1, 2, 1, 1, 3])); //[2,1,3]