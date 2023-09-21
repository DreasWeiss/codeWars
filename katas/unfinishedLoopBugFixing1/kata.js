// #1
// function createArray(number) {
//     return Array.from(Array(number).keys()).map(i=>i+1);
// }


// #2
function createArray(number) {
    return Array.from({ length: number }, (v, i) => i + 1)
}

console.log(createArray(1)); //[1]
console.log(createArray(2)); //[1,2]
console.log(createArray(3)); //[1,2,3]
console.log(createArray(4)); //[1,2,3,4]
console.log(createArray(5)); //[1,2,3,4,5]