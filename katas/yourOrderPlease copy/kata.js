// #1
// function getMinMax(arr) {
//     let sorted = arr.sort((a,b)=> a-b);
//     return [sorted[0],sorted[sorted.length-1]];
// };

// #2
function getMinMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
};


console.log(getMinMax([1])); //[1,1]
console.log(getMinMax([1, 2])); //[1,2]
console.log(getMinMax([2, 1])); //[1,2]