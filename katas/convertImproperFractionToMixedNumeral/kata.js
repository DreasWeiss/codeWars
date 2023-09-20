function convertToMixedNumeral(parm) {
    // Insert your awesome code here!
    let p = parm.split('/');
    let a = +p[0];
    let b = +p[1];
    let answer = '';

    if (a === 0 | b === 0) {
        return '0'
    } else if (a % b === 0) {
        answer += a / b
    } else if (a <= 0 | b === 0 && a > b | a * -1 > b) {
        answer += `-${Math.floor((a / b) * -1)} ${(a % b) * -1}/${b}`
    } else if (a < b) {
        return parm
    } else {
        answer += `${Math.floor(a / b)} ${a % b}/${b}`
    }

    return answer;
}


console.log(convertToMixedNumeral('-31/19'));
console.log(convertToMixedNumeral('-49/2'));
console.log(convertToMixedNumeral('-39/50'));
console.log(convertToMixedNumeral('6/2')); // '3'
console.log(convertToMixedNumeral('74/3')); // '24 2/3'
console.log(convertToMixedNumeral('-504/26')); // '-19 10/26'
console.log(convertToMixedNumeral('9/18')); // '9/18'