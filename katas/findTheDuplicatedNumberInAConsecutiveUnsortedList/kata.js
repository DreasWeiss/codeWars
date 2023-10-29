// #1
// function findDup( arr ){
//     const numSet = new Set();
//     for (const num of arr) {
//       if (numSet.has(num)) {
//         return num;
//       }
//       numSet.add(num);
//     }
//     return -1;
//   }


// #2
function findDup(arr) {
    let map = new Map();
    arr.map(i => map.has(i) ? map.set(i, 2) : map.set(i, 1))

    return [...map].filter(i => i[1] === 2)[0][0];
}


console.log(findDup([1, 2, 2, 3])); // 2
console.log(findDup([1, 3, 2, 5, 4, 5, 7, 6])); // 5