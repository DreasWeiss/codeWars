// function findUniq(arr) {
//     return arr.filter(i => i !== arr.filter ( (i, idx) => arr.indexOf(i) !== idx )[0])[0];
// }
// Execution Timed Out (12000 ms)


function findUniq(arr) {
    let notUniq = (arr.filter((i, idx) => arr.indexOf(i) !== idx))[0];
    return arr.filter(i => i !== notUniq)[0];
}


console.log(findUniq([1, 0, 0])) //, 1);
console.log(findUniq([0, 1, 0])) //, 1);
console.log(findUniq([0, 0, 1])) //, 1);
console.log(findUniq([1, 1, 1, 2, 1, 1])) //, 2);
console.log(findUniq([1, 1, 2, 1, 1])) //, 2);
console.log(findUniq([3, 10, 3, 3, 3])) //, 10);