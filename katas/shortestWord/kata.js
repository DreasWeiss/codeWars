function findShort(s) {
    return s.split(' ').map(i => i.length).sort((a, b) => a - b)[0]
}



console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// 3

console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// 3

console.log(findShort("Let's travel abroad shall we"));
// 2