// #1
// function spacey(array) {
//     let l = [];
//     let s = '';
//     for (let i = 0; i < array.length; i++) {
//         s+=array[i];
//         l.push(s);
//     }
//     return l;
// }


// #2
function spacey(array) {
    let string = ''
    return array.map((e) => string += e)
}


console.log(spacey(['kevin', 'has', 'no', 'space']));
// [ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace']

console.log(spacey(['this', 'cheese', 'has', 'no', 'holes']));
// ['this','thischeese','thischeesehas','thischeesehasno','thischeesehasnoholes']

