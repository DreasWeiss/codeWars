// #1
// function solution(number) {
//     let counter = 0;
//     let i = 0;

//     while (i < number) {
//         if (i%3===0 || i%5===0) {
//             counter+=i;
//         }
//         i++
//     }
//     return counter;
// }


// #2
// function solution(number){
//   let total = 0;

//   for (let i=0; i<number; i++) {
//     if (i % 3 === 0 || i % 5 ===0){
//       total += i;
//     }
//   }
//   return total;
// }


// #3
// const solution = n => n < 1 ? 0 : [...new Array(n).keys()].reduce((acc, i) => acc + (i%3===0 || i%5===0 ? i : 0));


//#4
const solution = n => n <= 0 ? 0 : Array.from({ length: n }, (_, i) => (i % 3 == 0 || i % 5 == 0 ? i : 0)).reduce((a, b) => a + b);

console.log(solution(10)); // 23