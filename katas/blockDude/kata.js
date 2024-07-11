// #1
// function canTraverse(matrix) {
//   let d = [0];
//   for (let i = 0; i < 9; i++) {
//       let boxCount = 0;
//       for (let j = 3; j >= 0; j--) {
//           if (matrix[j][i] !== 1) {
//               break;
//           }
//           boxCount++;
//       }
//       d[i+1] = boxCount;
//   }

//   console.log(d);

//   for (let i = 0; i < 9; i++) {
//       let dif = d[i] - d[i+1];
//       if (dif < -1 || dif > 1) {
//           return false;
//       }
//   }

//   return true;
// }


// #2
// function canTraverse(matrix) {
  
//   let levelMatrix = matrix.length
//   let lengthLineMatrix = matrix[0].length
  
//   let lastSum = 0
//   let currectSum = 0
  
//   for (let i = 0; i < lengthLineMatrix; i++) {
//     currectSum = 0
//     for (let j = 0; j < levelMatrix; j++) {
//       matrix[j][i] ? currectSum += 1 : currectSum
//     }
//      if (Math.abs(currectSum - lastSum) > 1) {
//         return false
//     }
//     lastSum = currectSum
//   }
  
//   return true
// }


// #3
const canTraverse = matrix =>
  matrix[0].map((_, idx) => matrix.length - 1 - matrix.findLastIndex(row => !row[idx]))
           .every((val, idx, arr) => Math.abs(val - ~~arr[idx-1]) <= 1);


// Test cases
console.log(canTravel([
  [0, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1]
])); // ➞ True

console.log(canTravel([
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1]
])); // ➞ False

console.log(canTravel([
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1]
])); // ➞ False

console.log(canTravel([
  [0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 1, 1, 1, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1]
])); // ➞ True