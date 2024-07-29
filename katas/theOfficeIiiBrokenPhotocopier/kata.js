// #1
// function broken(x){
//     return [...x].map(i=>i==='1'? i=0 : i='1').join('')
// }

// #2
const broken = (x) => x.replace(/\d/g, (val) => val ^ 1);

console.log(broken('1'));
// "0"

console.log(broken('10000000101101111110011001000'));
// "01111111010010000001100110111"

console.log(broken('100010'));
// "011101"
