// #1
// var min = function (list) {

//     return list.sort((a,b) => a - b)[0];
// }

// var max = function (list) {

//     return list.sort((a,b) => b - a)[0];
// }


//#2
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);


console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110
console.log(min([42, 54, 65, 87, 0])); // 0
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); // 566
console.log(max([5])); // 5