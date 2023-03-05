// function doubleChar(str) {
//     return str.split('').map(i=> i=`${i}${i}`).join('');
// }


// 2
const doubleChar = s => s.split('').map(i => i = `${i}${i}`).join('');

console.log(doubleChar("abcd"));  // "aabbccdd");
console.log(doubleChar("Adidas"));  // "AAddiiddaass");
console.log(doubleChar("1337"));  // "11333377");
console.log(doubleChar("illuminati"));  // "iilllluummiinnaattii");
console.log(doubleChar("123456"));  // "112233445566");
console.log(doubleChar("%^&*("));  // "%%^^&&**((");