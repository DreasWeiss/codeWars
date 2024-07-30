// #1
// function countRepeats(str) {
//     // code solution
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i]===str[i+1]) {
//             count++
//         }
//     }
//     return count;
// }

// #2
function countRepeats(s) {
  return s.length - s.replace(/(.)\1+/g, '$1').length;
}

console.log(countRepeats('AABCCD')); // 2
console.log(countRepeats('AABCCDA')); // 2
console.log(countRepeats('AaBBCCC')); // 3
