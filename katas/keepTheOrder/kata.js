// #1
// function keepOrder(ary, val) {
//     return [...ary,val].sort((a,b)=>a-b).indexOf(val);
// }


//#2
function keepOrder(ary, val) {
    return ary.filter(a => a < val).length;
}


console.log(keepOrder([1, 2, 3, 4, 7], 5));//, 4);
console.log(keepOrder([1, 2, 3, 4, 7], 0));//, 0);
console.log(keepOrder([1, 1, 2, 2, 2], 2));//, 2);
console.log(keepOrder([1, 2, 3, 4], 5));//, 4);
console.log(keepOrder([1, 2, 3, 4], -1));//, 0);
console.log(keepOrder([1, 2, 3, 4], 2));//, 1);
console.log(keepOrder([1, 2, 3, 4], 0));//, 0);
console.log(keepOrder([1, 2, 3, 4], 1));//, 0);
console.log(keepOrder([1, 2, 3, 4], 2));//, 1);
console.log(keepOrder([1, 2, 3, 4], 3));//, 2);
console.log(keepOrder([-5, -4, -2, -1, 1, 2], -2));//, 2);