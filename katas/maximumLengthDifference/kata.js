// #1
// function mxdiflg(a1, a2) {
//     // your code
//     let a = a1.map(i=>i.length).sort((a,b)=> b-a)
//     let aMax = a[0]
//     let aMin = a[a.length-1]
//     let b = a2.map(i=>i.length).sort((a,b)=>b-a)
//     let bMax = b[0]
//     let bMin = b[b.length-1]
//     let c =  aMax-bMin
//     let d = bMax-aMin
//     return a1.length === 0 || a2.length === 0 ? -1 :
//             c>d ? c : d;
// }


// #2
function mxdiflg(a1, a2) {
    if (a1.length === 0 || a2.length === 0) return -1
    let l1 = a1.map(str => str.length)
    let l2 = a2.map(str => str.length)
    return Math.max(Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1))
  }


var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
console.log(mxdiflg(s1, s2))// 13