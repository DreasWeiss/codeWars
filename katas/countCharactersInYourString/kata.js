function count(string) {
    let c = {};
    string.split('').map(v => c[v] = c[v] + 1 || 1)
    return c;
}



console.log(count('')); // {}
console.log(count('a')); // {'a': 1}
console.log(count('ab')); // {'a': 1, 'b': 1}
console.log(count('aba')); // {'a': 2, 'b': 1}
console.log(count('ABC')); // {'A': 1, 'B': 1, 'C': 1}