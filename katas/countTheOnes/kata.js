// #1
// function convertToBinary1 (number) {
//     let num = number;
//     let binary = `${(num % 2)}`;
//     for (; num > 1; ) {
//         num = parseInt(num / 2);
//         binary =  (num % 2) + (binary);
//     }
//     return binary;
// }

// function hammingWeight(x) {
//     return [...convertToBinary1(x)].filter(i=>i=='1').length;
// }


// #2
function hammingWeight(x) {
    return x ? x % 2 + hammingWeight(x >> 1) : x
}


console.log(hammingWeight(10)) // 1010  => 2
console.log(hammingWeight(21)) // 10101 => 3