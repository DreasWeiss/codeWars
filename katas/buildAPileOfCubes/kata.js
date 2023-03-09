// # 1
// function findNb(m) {
//     let n = parseInt(Math.sqrt(2 * (Math.sqrt(m)))) - 1;
//     while ( ((n * (n+1))/2) ** 2 < m ) {
//       n++;
//     }
//     return ((n * (n+1))/2) ** 2 > m ? -1 : n;
// }


// # 2
function findNb(m) {
    let ttl = 0;
    let n = 0;

    while (ttl < m) {
        n += 1;
        ttl += n ** 3;
    }

    return ttl === m ? n : -1;
}

console.log(findNb(4183059834009));  // 2022)
console.log(findNb(24723578342962));  // -1)
console.log(findNb(135440716410000));  // 4824)
console.log(findNb(40539911473216));  // 3568)