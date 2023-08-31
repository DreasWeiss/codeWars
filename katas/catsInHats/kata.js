function height(n) {
    let h = 2000000;
    return Array(n).fill(h)
        .reduce((acc, i, idx) => acc + (i / (2.5 ** (idx + 1))), h)
        .toFixed(3);
}


console.log(height(7)); // "3331148.800"
console.log(height(0)); // "2000000.000"