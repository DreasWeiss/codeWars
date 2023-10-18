// #1
// function factors(integer, limit) {
//     //your code here
//     if (limit > integer) return [] 
//     let arr = [];
//     for (let i = limit; i <= integer; i++) {
//         if (integer % i === 0) arr.push(i);
//     }
//     return arr;
// }


// #2
// function factors(m, n) {
//     // Challenge Accepted ;)
//     return Array(m).fill(0)
//                 .map((_, i) => i + 1)
//                 .filter(x => x >= n && m % x === 0);
//   }


// #3
factors = (n, l) => [...Array(Math.max(n - l + 1, 0))]
    .map((_, i) => l + i)
    .filter(x => !(n % x));



console.log(factors(5, 1)); // [1, 5]
console.log(factors(30, 2)); // [2, 3, 5, 6, 10, 15, 30]
console.log(factors(100, 75)); // [100]
console.log(factors(40, 5)); // [5, 8, 10, 20, 40]
console.log(factors(1, 5)); // []