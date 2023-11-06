function containAllRots(s, arr) {
    for (let i = 0; i < s.length; i++)
        if (arr.indexOf(s.slice(i) + s.slice(0, i)) === -1)
            return false;
    return true;
}

console.log(containAllRots("", [])); // true)
console.log(containAllRots("", ["bsjq", "qbsj"])); // true)
console.log(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])); // true)
console.log(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"])); // false)