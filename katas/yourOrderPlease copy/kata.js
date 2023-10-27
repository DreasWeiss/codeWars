function plural(n) {
    // ...
    return n !== 1
}


console.log(plural(0)); // true, "Plural for 0"
console.log(plural(0.5)); // true, "Plural for 0.5"
console.log(plural(1)); // false, "Plural for 1"
console.log(plural(100)); // true, "Plural for 100"
console.log(plural(Infinity)); // true, "Plural for Infinity"
