function moveZeros(arr) {
    let first = arr.filter(i => i !== 0);
    let second = arr.filter(i => i === 0);
    return [...first, ...second];
}


console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
// [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]