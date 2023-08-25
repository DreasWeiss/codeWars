function breakChocolate(n, m) {
    return n * m >= 1 ? n * m - 1 : 0;
}


console.log(breakChocolate(5, 5)); // 24
console.log(breakChocolate(1, 1)); // 0