function strCount(str, letter) {
    return str.toLowerCase().split('').filter(i => i === letter).length;
}


console.log(strCount('Hello', 'o')); // 1
console.log(strCount('Hello', 'l')); // 2
console.log(strCount('', 'z')); // 0