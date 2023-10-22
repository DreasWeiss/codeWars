// #1
// function spinAround(turns) {
//     // Here be dragons!
//     let t = 0;

//     for (let i = 0; i < turns.length; i++) {
//         if (turns[i] === 'left') {
//             t -= 90;
//         } 
//         if (turns[i] === 'right') {
//             t += 90;
//         }
//     }
//     return Math.floor(Math.abs(t)/360);
// }


// #2
function spinAround(turns) {
    return Math.floor(Math.abs(turns.reduce((a, d) => a + (d === "right" ? 90 : d === "left" ? -90 : 0), 0)) / 360)
}

console.log(spinAround(['left', 'right', 'left', 'right'])); // 0

console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'])); // 2

console.log(spinAround(['left', 'left', 'left', 'left'])); // 1

console.log(spinAround([])); // 0

console.log(spinAround(['left'])); // 0

console.log(spinAround(['right'])); // 0

console.log(spinAround(['right', 'right', 'right', 'left', 'right', 'right'])); // 1

console.log(spinAround(['left', 'left', 'right', 'left', 'left', 'left', 'left', 'left', 'left', 'right', 'left', 'left', 'right', 'right', 'right', 'right', 'left', 'left', 'right', 'right'])); // 1

console.log(spinAround(['right', 'left', 'left', 'right', 'left', 'left', 'right', 'left', 'right', 'right', 'left', 'left', 'right', 'right', 'right', 'left', 'left', 'right'])); // 0

console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right'])); // 10

console.log(spinAround(['left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left', 'left'])); // 10
