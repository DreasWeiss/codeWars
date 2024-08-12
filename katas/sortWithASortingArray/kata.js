// #1
// function sort(initialArray, sortingArray) {
//   var n = initialArray.length;
//   var result = [];
//   for (var i=0; i<n; i++) {
//     result[sortingArray[i]] = initialArray[i];
//   }
//   return result;
// }

// #2
// function sort(initialArray, sortingArray) {
//   return initialArray.map((item, index) => ({item: item, index: sortingArray[index]}))
//                      .sort((a, b) => a.index - b.index)
//                      .map((item) => item.item);
// }

// #3
function sort(initialArray, sortingArray) {
  return initialArray.map((_, idx) => initialArray[sortingArray.indexOf(idx)]);
}

console.log(sort(['x', 'y', 'z'], [1, 2, 0]));
// ["z", "x", "y"]
// "For initialArray = ['x', 'y', 'z'], sortingArray = [1, 2, 0]");
/*
['x', 'y', 'z']
[ 1,   2,   0 ] <-  Sorting array are the new indices of the 
elements of the array to sort, 
so 'x' goes to index 1, 'y' to index 2 and 'z' to index 0.
['z', 'x', 'y']
*/

console.log(sort(['x', 'y', 'z'], [0, 1, 2]));
// ['x', 'y', 'z']
// "For initialArray = ['x', 'y', 'z'], sortingArray = [0, 1, 2]");

console.log(sort([1, 2, 3, 4, 5], [0, 1, 2, 3, 4]));
// [1, 2, 3, 4, 5]
// "For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 1, 2, 3, 4]");

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]));
// [1, 3, 2, 5, 4]
// "For initialArray = [1, 2, 3, 4, 5], sortingArray = [0, 2, 1, 4, 3]");
