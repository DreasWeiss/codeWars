// # 1
// function removeSmallest(numbers) {
//     if (numbers.length <= 1) {
//         return []
//     } else {
//         let n = [...numbers];
//         n.splice(numbers.indexOf([...n].sort((a, b) => a - b).shift()), 1);
//         return n;
//     }
// }


// # 2
function removeSmallest(numbers) {
    let indMin = numbers.indexOf(Math.min(...numbers));
    return [...numbers.slice(0, indMin), ...numbers.slice(indMin + 1)];
}


console.log(removeSmallest([1, 2, 3, 4, 5])); //, [2, 3, 4, 5], "Wrong result for [1, 2, 3, 4, 5]");
console.log(removeSmallest([5, 3, 2, 1, 4])); //, [5, 3, 2, 4], "Wrong result for [5, 3, 2, 1, 4]");
console.log(removeSmallest([2, 2, 1, 2, 1])); //, [2, 2, 2, 1], "Wrong result for [2, 2, 1, 2, 1]");
console.log(removeSmallest([])); //, [], "Wrong result for []");