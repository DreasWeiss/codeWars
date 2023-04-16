function sum() {
    return [...arguments].reduce((acc, i) => acc + i, 0);
}


console.log(sum(1)); // 1 
console.log(sum(1, 2)); // 3 
console.log(sum(5, 7, 9)); // 21 
console.log(sum(12, 1, 1, 1, 1)); // 16 
console.log(sum(12, 1, 1, 1, 1, 1, 1)); // 18 
