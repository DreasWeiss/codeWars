function findAverage(array) {
    // your code here
    return array.length === 0 ? 0 :
        array.reduce((acc, i) => acc + i, 0) / array.length;
}



console.log(findAverage([1, 1, 1])); // 1
console.log(findAverage([1, 2, 3])); // 2
console.log(findAverage([1, 2, 3, 4])); // 2.5