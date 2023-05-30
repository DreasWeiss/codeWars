// #1
// const sumSquareEvenRootOdd = ns => {
//     return +ns.map(i => i%2===0 ? i*i : i**0.5)
//             .reduce((acc, i) => acc + i, 0)
//             .toFixed(2)       
// };


// #2
const sumSquareEvenRootOdd = ns => {
    return +ns.reduce((acc, i) => acc + (i % 2 === 0 ? i ** 2 : i ** 0.5), 0)
        .toFixed(2);
};


console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));
//91.61

console.log(sumSquareEvenRootOdd([1, 14, 9, 8, 17, 21]));
//272.71