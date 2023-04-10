function solution(number) {
    const roNums = {
        M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90,
        L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1,
    };

    let str = '';
    for (let i of Object.keys(roNums)) {
        let q = Math.floor(number / roNums[i]);
        number -= q * roNums[i];
        str += i.repeat(q);
    }

    return str;
}


console.log(solution(1));
// 'I', '1 should return "I"'

console.log(solution(2));
// 'II', '2 should return "II"'

console.log(solution(3));
// 'III', '3 should return "III"'

console.log(solution(4));
// 'IV', '4 should return "IV"'

console.log(solution(5));
// 'V', '5 should return "V"'

console.log(solution(9));
// 'IX', '9 should return "IX"'

console.log(solution(10));
// 'X', '10 should return "X"'

console.log(solution(11));
// 'XI', '11 should return "XI"'

console.log(solution(19));
// 'XIX', '19 should return "XIX"'

console.log(solution(22));
// 'XXII', '22 should return "XXII"'

console.log(solution(15));
// 'XV', '15 should return "XV"'
