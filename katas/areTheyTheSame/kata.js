function comp(a, b) {
    if (a === null || b === null || a.length !== b.length) {
        return false;
    }
    let sortedA = a.map(i => i * i).sort();
    let sortedB = b.sort();
    return JSON.stringify(sortedA) == JSON.stringify(sortedB);
}

const a = [121, 144, 19, 161, 19, 144, 19, 11];
const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
const c = [121, 144, 19, 161, 19, 144, 19, 11];
const d = [121, 14641, 20736, 36100, 25921, 361, 20736, 361];

console.log(comp(a, b));
console.log(comp(c, d));