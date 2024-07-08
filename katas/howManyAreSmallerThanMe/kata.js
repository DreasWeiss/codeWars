// #1
// function smaller(nums) {
//     //code me
//     let res = [];
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for(let j = i+1; j < nums.length; j++) {
//             if(nums[i]>nums[j]) {
//                 count++
//             }
//         }
//         res.push(count)
//     }
//     return res;
// }


// #2
// const smaller = n => n.map((i,idx)=> i = [...n].splice(idx+1).reduce((acc,k)=> i>k ? acc+1:acc+0,0));


//#3
const smaller = nums => nums.map((x, i) => nums.slice(i).filter(y => x > y).length);

console.log(smaller([5, 4, 3, 2, 1])); 
// [4, 3, 2, 1, 0]
    
console.log(smaller([1, 2, 3])); 
// [0, 0, 0]
    
console.log(smaller([1, 2, 0])); 
// [1, 1, 0]
    
console.log(smaller([1, 2, 1])); 
// [0, 1, 0]
    
console.log(smaller([1, 1, -1, 0, 0])); 
// [3, 3, 0, 0, 0]
    
console.log(smaller([5, 4, 7, 9, 2, 4, 4, 5, 6])); 
// [4, 1, 5, 5, 0, 0, 0, 0, 0]