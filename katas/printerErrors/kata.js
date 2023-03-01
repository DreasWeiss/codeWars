// # 1
// function printerError(s) {
//     return `${s.length - s.split('').filter((i) => i.match(/[a-m]/g)).length}/${s.length}`
// }


// # 2
const printerError = s => `${s.split('').filter((i) => !i.match(/[a-m]/g)).length}/${s.length}`


console.log(printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz')); // "3/56"