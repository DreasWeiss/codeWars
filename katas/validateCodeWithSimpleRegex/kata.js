// #1
// function validateCode (code) {
// //your code here
//     return code.toString().match(/^[1|2|3]/gi) === null ? false : true
// }

// #2
function validateCode(code) {
  return /^[123]/.test(code);
}

console.log(validateCode(123)); // true
console.log(validateCode(248)); // true
console.log(validateCode(8)); // false
console.log(validateCode(321)); // true
console.log(validateCode(9453)); // false
