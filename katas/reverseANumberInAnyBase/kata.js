function reverseNumber(n, b) {
    if (b === 1n) return n;
    let res = 0n;
    while (n > 0n) {
        res = res * b + n % b;
        n /= b;
    }
    return res;
}

// I hate this task