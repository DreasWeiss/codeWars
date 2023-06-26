// function sumMul(n, m) {
//     if (m <= n) return 'INVALID';
//     let count = 0;
//     let k = n;
//     while (k < m) {
//         count += k;
//         k+=n
//     }
//     return count;
// }


// #2
function sumMul(n, m) {
    if (m <= n) return 'INVALID';
    let count = 0;
    for (let i = n; i < m; i += n) {
        count += i;
    }
    return count;
}

console.log(sumMul(0, 0)); //"INVALID"
console.log(sumMul(2, 9)); //20
console.log(sumMul(4, -7)); //"INVALID"