// #1
// function findNumber(b, e, s) {
//   let res = [],
//     j = 0;
//   let a = Array(e - b + 1)
//     .fill(0)
//     .map((_, i) => b + i)
//     .join('')
//     .split('')
//     .sort();
//   s = s.split('').sort();
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == s[j]) j++;
//     else res.push(+a[i]);
//   }
//   let rem = new Set();
//   function comb(m, lef) {
//     if (!lef.length) rem.add(+m);
//     for (let i = 0; i < lef.length; i++) {
//       let x = lef.slice();
//       x.splice(i, 1);
//       comb(m + lef[i], x);
//     }
//   }
//   comb('', res);
//   return [...rem].filter(
//     (x) => x >= b && x <= e && x >= 10 ** (res.length - 1)
//   );
// }


// #2
const countString = (s) =>
  s.split('')
    .reduce((s, v) => (s[v]++, s), Array(10).fill(0));
const findNumber = (start, stop, str) => {
  const countedStr = countString(str);
  const baseArray = Object.keys([...Array(stop + 1)]).slice(start);
  const countedBase = countString(baseArray.join(''));
  const countedDiff = countedBase.map((v, i) => v - countedStr[i]);
  return baseArray
            .filter((n) => countString(n)
            .join('') === countedDiff.join(''))
            .map(Number);
};


console.log(findNumber(1, 10, '12345678910')); // []
console.log(findNumber(1, 10, '2345678910')); // [1]
console.log(findNumber(1, 10, '1234678910')); // [5]
console.log(findNumber(1, 10, '123456789')); // [10]
console.log(findNumber(1, 21, '1116122137143151617181920849510')); // [12, 21]
