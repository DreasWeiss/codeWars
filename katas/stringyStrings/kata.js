// #1
// function stringy(size) {
//     str = "1";
//     while (str.length < size) {
//         str.length % 2 === 0 ? str += '1' : str += '0';
//     }
//     return str;
// }


// #2
function stringy(size) {
    return Array.from(Array(size)).map((i, idx) => idx % 2 === 0 ? i = 1 : i = 0).join('');
}


console.log(stringy(10));