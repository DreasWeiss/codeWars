function digPow(n, p) {
    let dig = n.toString().split('');
    let res = 0;

    for (let i = 0; i < dig.length; i++) {
        res += Math.pow(dig[i], p);
        p++;
    }

    return res % n === 0 ? res / n : -1;
}


console.log(digPow(89, 1)); // 1
console.log(digPow(92, 1)); // -1
console.log(digPow(46288, 3)); // 51