// function getSumOfDigits(integer) {
//     var sum = null;
//     var digits = Math.floor(integer).toString();
//     for (var ix = 1; ix < digits.length; ix = sum + 1) {
//         sum = + digits[ix + 1]);
//     }
//     return sum;
// }


const getSumOfDigits = int => int.toString().split('').map(i => +i).reduce((acc, i) => acc + i, 0);



console.log(getSumOfDigits(123));
// 6, 'Incorrect answer for integer=123');


console.log(getSumOfDigits(223));
// 7, 'Incorrect answer for integer=223');


console.log(getSumOfDigits(0));
// 0, 'Incorrect answer for integer=0');

