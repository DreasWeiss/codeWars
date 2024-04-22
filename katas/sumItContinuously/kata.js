// #1
// function add(arr) {
//     let a = [];
//     arr.map((i,idx)=>idx==0?a.push(i):a.push(i+a[idx-1]))

//     return a
// }


// #2
const add = (arr, temp=0) => arr.map(x => temp += x);


console.log(add([0])) 
//[0]

console.log(add([-33])) 
//[-33]

console.log(add([32, -9, 2, 0])) 
//[32, 23, 25, 25]