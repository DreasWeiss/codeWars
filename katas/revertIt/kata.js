// #1
// function reverseIt(data) {
//     return typeof(data) != 'string' & typeof(data) != 'number' ? 
//             data:
//             typeof(data) == 'string' ?
//                 Array.from(data).reverse().join(''):
//                 +Array.from(data.toString()).reverse().join('');
// }


// #2
function reverseIt(data) {
    return typeof (data) == 'string' ?
        Array.from(data).reverse().join('') :
        typeof (data) == 'number' ?
            +Array.from(data.toString()).reverse().join('') :
            data
}


console.log(reverseIt('Hello')); // "olleH"
console.log(reverseIt(314159)); // 951413
console.log(reverseIt("314159")); // "951413"
console.log(reverseIt([])); // []