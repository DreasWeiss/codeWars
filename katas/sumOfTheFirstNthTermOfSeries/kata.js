function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
        s += 1 / (1 + i * 3)
    }
    return s.toFixed(2)
}


console.log(SeriesSum(1)); // "1.00"
console.log(SeriesSum(2)); // "1.25"
console.log(SeriesSum(3)); // "1.39"
console.log(SeriesSum(4)); // "1.49"
console.log(SeriesSum(5)); // "1.57"