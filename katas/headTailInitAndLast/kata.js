const head = i => i[0];
const tail = i => i.slice(1);
const init = i => i.slice(0, -1);
const last = i => i[i.length - 1];


console.log(head([5, 1])); //, 5
console.log(tail([1])); //, []
console.log(init([1, 5, 7, 9])); //, [1,5,7]
console.log(last([7, 2])); //, 2