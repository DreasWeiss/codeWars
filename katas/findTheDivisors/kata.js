// #1
// function divisors(integer) {
//   let res = [];
//   let s = Math.round(integer / 2);
//   let c = 2;
//   while (c <= s) {
//     let d = integer%c;
//     if (d === 0) {
//         res.push(c)
//     }
//     c++
//   }
//   return res.length>0 ? res : `${integer} is prime`;
// }

// #2
function divisors(integer) {
  let res = [];
  for (let i = 2; i <= Math.floor(integer / 2); ++i)
    if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime';
}

console.log(divisors(15)); // [3, 5]
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(13)); // '13 is prime'
