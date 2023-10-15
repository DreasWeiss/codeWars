// #1
// var hotpo = function(n){
//     if(n == 0) return 0; //Optional Handler to n = 0
//     let count = 0;
//     while (n > 1) {
//         if (n % 2 === 0){
//             n = n/2
//         } else {
//             n = 3*n+1
//         }
//         count+=1;
//     }
//     return count;
// }

// #2
// var hotpo = function(n, acc = 0) {
//     return n <= 1 ? acc :  hotpo(n%2==0 ? n/2 : 3*n+1, acc+1)
// }

// #3
const hotpo = n => n === 1 ? 0 : 1 + hotpo(n % 2 ? (n * 3 + 1) : n / 2);

console.log(hotpo(1)); // 0
console.log(hotpo(5)); // 5
console.log(hotpo(6)); // 8
console.log(hotpo(23)); // 15