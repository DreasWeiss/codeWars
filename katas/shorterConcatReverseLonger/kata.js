function shorter_reverse_longer(a, b) {
    return a.length >= b.length ?
        b + [...a].reverse().join('') + b :
        a + [...b].reverse().join('') + a
}


console.log(shorter_reverse_longer("first", "abcde"));
// "abcdetsrifabcde"
console.log(shorter_reverse_longer("hello", "bau"));
// "bauollehbau"
console.log(shorter_reverse_longer("fghi", "abcde"));
// "fghiedcbafghi" 