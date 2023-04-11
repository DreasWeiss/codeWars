function digitalRoot(n) {
    while (n.toString().split('').length > 1) {
        n = n.toString().split('').map(i => +i).reduce((acc, i) => acc + i, 0);
        digitalRoot(n);
    }
    return n;
}


console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(132189)); // 6
console.log(digitalRoot(493193)); // 6