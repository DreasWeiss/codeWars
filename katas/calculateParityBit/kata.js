// #1
// function checkParity(parity, bin) {
//     if ([...bin].filter(i=> i==='1').length%2===0) {
//         return parity ==='even' ? 0:1
//     } else {
//         return parity ==='even' ? 1:0
//     }
// }


// #2
const checkParity = (parity, bin) => +(parity === (bin.split('1').length % 2 ? 'odd' : 'even'))


console.log(checkParity('even', '101010')); // 1
console.log(checkParity('odd', '101010')); // 0
console.log(checkParity('even', '101011')); // 0
console.log(checkParity('odd', '101011')); // 1