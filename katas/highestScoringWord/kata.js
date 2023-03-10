const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function high(x) {
    let arr = x.toLowerCase()
        .split(' ')
        .map(i => i.split('').reduce((acc, i) => acc + (alphabet.indexOf(i) + 1), 0));

    let iHigh = [...arr].sort((a, b) => b - a);

    return x.split(' ')[arr.indexOf(iHigh[0])];
}




console.log(high('man i need a taxi up to ubud'));
// 'taxi');

console.log(high('what time are we climbing up the volcano'));
// 'volcano'); 

console.log(high('take me to semynak'));
// 'semynak');   

console.log(high('aa b'));
// 'aa');

console.log(high('b aa'));
// 'b');

console.log(high('bb d'));
// 'bb');

console.log(high('d bb'));
// 'd');

console.log(high('aaa b'));
  // 'aaa');
