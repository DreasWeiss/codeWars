// # 1
// function solution(nums) {
//     return nums !== null && nums.length > 0 ? nums.sort((a,b) => a - b) : [];
// }


// # 2
const solution = n => n !== null && n.length > 0 ? n.sort((a, b) => a - b) : [];

console.log(solution([1, 2, 3, 10, 5]));   //, [1,2,3,5,10])
console.log(solution(null));   //, [])
console.log(solution([]));   //, [])
console.log(solution([20, 2, 10]));   //, [2,10,20])
console.log(solution([2, 20, 10]));   //, [2,10,20])