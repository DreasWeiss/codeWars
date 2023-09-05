function isDivisible() {
    return [...arguments].map(a => arguments[0] % a).filter(a => a !== 0).length === 0;
}


console.log(isDivisible(3, 3, 4));// false
console.log(isDivisible(12, 3, 4));// true
console.log(isDivisible(8, 3, 4, 2, 5));// false