function maxlen(l1, l2) {
    // return maximum length
    let max = Math.max(l1, l2)
    let min = Math.min(l1, l2)

    if (max / 3 > min)
        return max / 3

    if (max - min > min)
        return min

    return max / 2
}

console.log(maxlen(5, 12));// 5, 1e-9, '(5, 12)');
console.log(maxlen(12, 5));// 5, 1e-9, '(12, 5)');