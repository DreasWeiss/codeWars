function powersOfTwo(n) {
    let answer = [];
    for (let i = 0; i <= n; i++) {
        answer.push(Math.pow(2, i));
    }
    return answer;
}

console.log(powersOfTwo(0));  // [1])
console.log(powersOfTwo(1));  // [1, 2])
console.log(powersOfTwo(4));  // [1, 2, 4, 8, 16])