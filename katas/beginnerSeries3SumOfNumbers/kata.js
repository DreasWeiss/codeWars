// # 1
// function getSum(a, b) {
//     if (a === b) {
//         return a;
//     } else {
//         let arr = [a, b].sort((a, b) => a - b);
//         let sum = 0;
//         for (let i = arr[0]; i <= arr[1]; i++) {
//             sum += i;
//         }
//         return sum;
//     }
// }


// # 2
// function getSum(a, b) {
//     if (a === b) {
//         return a;
//     } else {
//         let arr = [a, b].sort((a, b) => a - b);
//         let sum = 0;
//         let i = arr[0]
//         while (i <= arr[1]) {
//             sum += i;
//             i++
//         }
//         return sum;
//     }
// }


// # 3
// function getSum(a, b) {
//     let arr = [a, b].sort((a, b) => a - b);
//     let sum = 0;
//     let i = arr[0]
//     while (i <= arr[1]) {
//         sum += i;
//         i++
//     }
//     return sum;
// }


// # 4
const GetSum = (a, b) => {
    let min = Math.min(a, b),
        max = Math.max(a, b);
    return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(0, -1)) //, -1);
console.log(getSum(0, 1)) //,  1);
console.log(getSum(2, 2)) //,  2);