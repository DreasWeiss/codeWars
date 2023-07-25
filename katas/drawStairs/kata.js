function drawStairs(n) {
    return new Array(n).fill('I')
        .map((i, idx) => ' '.repeat(idx) + i)
        .join('\n')
}


console.log(drawStairs(5));