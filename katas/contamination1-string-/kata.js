function contamination(text, char) {
    return Array.from(text).map(i => i = char).join('');
}


console.log(contamination("abc", "z")); // "zzz"
console.log(contamination("", "z")); // ""
console.log(contamination("abc", "")); // ""
console.log(contamination("_3ebzgh4", "&")); // "&&&&&&&&"
console.log(contamination("//case", " ")); // "      "