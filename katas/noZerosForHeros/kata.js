// #1
// function noBoringZeros(n) {
//     let a = '';
//     let b = n.toString().split('').reverse();
//     for (let i = 0; i < b.length; i++) {
//         if (b[i]!=='0'){
//             a += b.slice(i);
//             break;
//         }
//     }
//     return a.length == 0 ? 0 : +a.split(',').reverse().join('');
// }


// #2
// function noBoringZeros(n) {
//     while (n%10 == 0 && n!=0){
//         n/=10;
//     }
//     return n;
// }


// #3
const noBoringZeros = n => +`${n}`.replace(/0*$/, '');

console.log(noBoringZeros(1450)); // 145
console.log(noBoringZeros(960000)); // 96
console.log(noBoringZeros(1050)); // 105
console.log(noBoringZeros(-1050)); // -105
console.log(noBoringZeros(-105)); // -105
console.log(noBoringZeros(0)); // 0