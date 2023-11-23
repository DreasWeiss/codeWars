function isPowerOfTwo(n) {
    //.. should return true or false ..
    return Number.isInteger(Math.log2(n))
}


console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(4096)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(1024)); // true
console.log(isPowerOfTwo(333)); // false
console.log(isPowerOfTwo(0)); // false