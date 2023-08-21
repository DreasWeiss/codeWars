// #1
// function eliminateUnsetBits(number) {
//     // your code here
//     let ones = number.split('').filter(i=>i==='1').join('');
//     return ones.length < 1 ? 0 : parseInt(ones,2)
// }


// #2
function eliminateUnsetBits(number) {
    return parseInt(number.replace(/0/g, '') || 0, 2)
}


console.log(eliminateUnsetBits("11010101010101")); // 255
console.log(eliminateUnsetBits("111")); // 7
console.log(eliminateUnsetBits("1000000")); // 1
console.log(eliminateUnsetBits("000")); // 0