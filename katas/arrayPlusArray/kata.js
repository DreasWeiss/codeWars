function arrayPlusArray(arr1, arr2) {
    return [...arr1, ...arr2].reduce((acc, i) => acc + i);
}


console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
// 21

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
// -21

console.log(arrayPlusArray([0, 0, 0], [4, 5, 6]));
// 15

console.log(arrayPlusArray([100, 200, 300], [400, 500, 600]));
// 2100