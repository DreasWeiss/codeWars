function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b;
}


console.log(solution('45', '1')); // '1451'
console.log(solution('13', '200')); // '1320013'
console.log(solution('Soon', 'Me')); // 'MeSoonMe'
console.log(solution('U', 'False')); // 'UFalseU'
