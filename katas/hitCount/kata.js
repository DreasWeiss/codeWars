// #1
// function counterEffect(hitCount) {
//     return hitCount.split('')
//         .map(i => Array(+i + 1).fill().map((k, ind) => ind))
// }


// #2
function counterEffect(hitCount) {
    return [...hitCount].map(d => Array.from({ length: +d + 1 }, (_, i) => i))
}


console.log(counterEffect("1250"))
// [[0,1],[0,1,2],[0,1,2,3,4,5],[0]]

console.log(counterEffect("0050"))
// [[0],[0],[0,1,2,3,4,5],[0]]

console.log(counterEffect("0000"))
// [[0],[0],[0],[0]]
