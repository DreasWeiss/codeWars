const find = (arr, el) => (!arr.includes(el) ? 'Not found' : arr.indexOf(el));

let array = [2, 3, 5, 7, 11];
console.log(find(array, 5)); //, 2);
console.log(find(array, 11)); //, 4);
console.log(find(array, 3)); //, 1);
console.log(find(array, 2)); //, 0);
console.log(find(array, 7)); //, 3);
console.log(find(array, 1)); //, 'Not found');
console.log(find(array, 8)); //, 'Not found');
let array2 = [true, 'Hello World', false, 'Lorem Ipsum', 6, Math.PI];
console.log(find(array2, 'Hello World')); //, 1);
console.log(find(array2, 'lorem ipsum')); //, 'Not found');
console.log(find(array2, 'Lorem Ipsum')); //, 3);
console.log(find(array2, false)); //, 2);
console.log(find(array2, true)); //, 0);
console.log(find(array2, Math.PI)); //, 5);
console.log(find(array2, 3.14)); //, 'Not found');
console.log(find(array2, 6)); //, 4);
