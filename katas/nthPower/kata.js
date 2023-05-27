function index(array, n) {
    return array.length > n ?
        Math.pow(array[n], n) : -1;
}


console.log(index([1, 2, 3, 4], 2)); //9
console.log(index([1, 3, 10, 100], 3)); //1000000
console.log(index([1, 2], 3)); //-1
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 9)); //1
console.log(index([1, 1, 1, 1, 1, 1, 1, 1, 1, 2], 9)); //512
console.log(index([29, 82, 45, 10], 3)); //1000
console.log(index([6, 31], 3)); //-1
console.log(index([75, 68, 35, 61, 9, 36, 89, 0, 30], 10)); //-1