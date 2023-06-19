// #1
// function sumArray(array) {
//     return array === null || array === undefined || array.length <=1 ? 0 : array.sort((a,b)=>a-b).reduce((acc, i, idx) => idx===0 || idx===array.length-1 ? acc : acc+i, 0);
// }


// #2
const sumArray = arr => Array.isArray(arr) && arr.length >= 3 ? arr.reduce((acc, i) => acc + i, 0) - Math.max(...arr) - Math.min(...arr) : 0;


console.log(sumArray(null));
//                     , 0 

console.log(sumArray([]));
//                      , 0 

console.log(sumArray([3]));
//                    , 0 

console.log(sumArray([3, 5]));
//                 , 0 

console.log(sumArray([6, 2, 1, 8, 10]));
//       , 16 

console.log(sumArray([0, 1, 6, 10, 10]));
//      , 17 

console.log(sumArray([-6, -20, -1, -10, -12]));
//, -28 

console.log(sumArray([-6, 20, -1, 10, -12]));
//  , 3 
