// #1
// function sumDigits(number) {
//     if (number < 0) {
//         number *=-1
//     }
//     return number === 0 ? 0 : number.toString().split('').reduce((acc,i)=>+acc+(+i));
// }


// #2
const sumDigits = n => `${Math.abs(n)}`.split('').reduce((acc, i) => acc + +i, 0);



console.log(sumDigits(10)); // 1
console.log(sumDigits(99)); // 18
console.log(sumDigits(-32)); // 5