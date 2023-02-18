function sortArray(array) {
    let sortOddArr = array.filter(i => i % 2 !== 0).sort((a, b) => a - b);
    return array.map(i => i % 2 ? sortOddArr.shift() : i);
}

console.log(sortArray([7, 1])); // [1, 7]
console.log(sortArray([5, 8, 6, 3, 4])); // [3, 8, 6, 5, 4]
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]