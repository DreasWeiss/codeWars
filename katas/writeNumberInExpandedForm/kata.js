function expandedForm(num) {
    return num.toString()
        .split('')
        .map((n, idx, arr) => n + '0'.repeat(arr.length - idx - 1))
        .filter(n => +n !== 0)
        .join(' + ')
}


console.log(expandedForm(12)); // '10 + 2'
console.log(expandedForm(42)); // '40 + 2'
console.log(expandedForm(70304)); // '70000 + 300 + 4'