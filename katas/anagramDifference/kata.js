function anagramDifference(w1, w2) {
    let first = w1.split('');
    let second = w2.split('');

    for (let i = 0; i < first.length; i++) {
        if (second.includes(first[i])) {
            second[second.indexOf(first[i])] = '';
            first[i] = '';
        }
    }

    return [...first, ...second].join('').length;
}


console.log(anagramDifference("", "")); //    0

console.log(anagramDifference("a", "")); //    1

console.log(anagramDifference("", "a")); //   1

console.log(anagramDifference("ab", "a")); //   1

console.log(anagramDifference("ab", "cd")); //  4

console.log(anagramDifference("aab", "a")); //   2

console.log(anagramDifference("a", "aab")); // 2

console.log(anagramDifference("codewars", "hackerrank")); // 10
