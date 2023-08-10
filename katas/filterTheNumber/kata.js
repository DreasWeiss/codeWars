// // #1
// var filterString = function (value) {
//     //Complete this function :)
//     return +value.replace(/[^0-9]/gi,'')
// }


// // #2
// var filterString = function (value) {
//     //Complete this function :)
//     return +value.split('').filter(i=>i.match(/[0-9]/)).join('')
// }


// // #3
var filterString = function (value) {
    //Complete this function :)
    return +value.split(/[^0-9]/).join('')
}


console.log(filterString("123")); // 123, `For the input "123"`);
console.log(filterString("a1b2c3")); // 123, `For the input "a1b2c3"`);
console.log(filterString("aa1bb2cc3dd")); // 123, `For the input "aa1bb2cc3dd"`);