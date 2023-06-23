// #1
// var numberFormat = function (number) {
//     let arr = number.toString().split('').reverse();
//     let str = [];
//     for (let i=0; i < arr.length; i++){
//         if (i > 0 && i%3 === 0 && arr[i]!=='-'){
//             str.push(',');
//             str.push(arr[i]);
//         } else (
//             str.push(arr[i])
//         )

//     }
//     return str.reverse().join('');
// };


// #2
// const numberFormat = number =>
//   String(number).replace(/\B(?=(\d{3})+\b)/g, `,`);


// #3
const numberFormat = n => n.toLocaleString();


console.log(numberFormat(100000)); // '100,000'
console.log(numberFormat(5678545)); // '5,678,545'
console.log(numberFormat(-5678545)); // '-5,678,545'