// #1
// function pipeFix(numbers) {
//     return Array(numbers[numbers.length-1] - numbers[0] + 1).fill().map((e,i)=> numbers[0]+i)
// }


// #2
let pipeFix = nums => Array.from({ length: nums.pop() - nums[0] + 1 }, (v, i) => i + nums[0]);

console.log(pipeFix([1, 2, 3, 5, 6, 8, 9])); //[1,2,3,4,5,6,7,8,9]
console.log(pipeFix([1, 2, 3, 12])); //[1,2,3,4,5,6,7,8,9,10,11,12]
console.log(pipeFix([6, 9])); //[6,7,8,9]
console.log(pipeFix([-1, 4])); //[-1,0,1,2,3,4]
console.log(pipeFix([1, 2, 3])); //[1,2,3]