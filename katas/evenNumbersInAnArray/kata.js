function evenNumbers(array, number) {
    // good luck
    return array.filter(i => i % 2 === 0).splice(-number);
}


console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
//, [4, 6, 8]

console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));
//, [-8, 26]

console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1));
//, [6]
