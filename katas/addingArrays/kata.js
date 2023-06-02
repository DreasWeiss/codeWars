// #1
// function arrAdder(arr) {
//     let string = Array.from(arr[0]);

//     for (let i = 1; i < arr.length; i++) {
//         for ( let k = 0; k < arr[i].length; k++) {
//             string[k] += arr[i][k]        }
//     }

//     return string.join(' ');
// }


// #2
const arrAdder = a => a[0].map((_, i) => a.map(r => r[i]).join('')).join(' ');


console.log(arrAdder([
    ['J', 'L', 'L', 'M'],
    ['u', 'i', 'i', 'a'],
    ['s', 'v', 'f', 'n'],
    ['t', 'e', 'e', '']
]))
//"Just Live Life Man"

console.log(arrAdder([
    ['T', 'M', 'i', 't', 'p', 'o', 't', 'c'],
    ['h', 'i', 's', 'h', 'o', 'f', 'h', 'e'],
    ['e', 't', '', 'e', 'w', '', 'e', 'l'],
    ['', 'o', '', '', 'e', '', '', 'l'],
    ['', 'c', '', '', 'r', '', '', ''],
    ['', 'h', '', '', 'h', '', '', ''],
    ['', 'o', '', '', 'o', '', '', ''],
    ['', 'n', '', '', 'u', '', '', ''],
    ['', 'd', '', '', 's', '', '', ''],
    ['', 'r', '', '', 'e', '', '', ''],
    ['', 'i', '', '', '', '', '', ''],
    ['', 'a', '', '', '', '', '', '']]));
// "The Mitochondria is the powerhouse of the cell"