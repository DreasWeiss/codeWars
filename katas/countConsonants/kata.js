// #1
// function consonantCount(str) {
//     return str.split('').filter(i=>/(?![aeiou])[a-z]/gi.test(i)).length
// }


// #2
const consonantCount = str => str.replace(/[^a-z]|[aeiou]/gi, '').length;


console.log(consonantCount('')); // 0
console.log(consonantCount('aeiouAEIOU')); // 0
console.log(consonantCount('aaa')); // 0
console.log(consonantCount('bcdfghjklmnpqrstvwxyz')); // 21
console.log(consonantCount('bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ')) //42
console.log(consonantCount('y')); // 1
console.log(consonantCount('Y')); // 1
console.log(consonantCount('01234567890_')); // 0
console.log(consonantCount(' ^&$#')); // 0
console.log(consonantCount('aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#')); // 42