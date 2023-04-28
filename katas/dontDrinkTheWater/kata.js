function separateLiquids(glass) {
    let pos = ['O', 'A', 'W', 'H'];
    if (glass.length === 0) return [];
    let sorted = glass.toString().split(',').sort((a, b) => pos.indexOf(a) - pos.indexOf(b));

    let arr = [];
    for (let i = 0; i < sorted.length; i += glass[0].length) {
        arr.push(sorted.slice(i, i + glass[0].length))
    }

    return arr;
}


console.log(separateLiquids([['H', 'H', 'W', 'O'], ['W', 'W', 'O', 'W'], ['H', 'H', 'O', 'O']]));
// [['O', 'O', 'O', 'O'],['W','W','W','W'],['H','H','H','H']], "");

console.log(separateLiquids([['A', 'A', 'O', 'H'], ['A', 'H', 'W', 'O'], ['W', 'W', 'A', 'W'], ['H', 'H', 'O', 'O']]));
//  [['O','O','O','O'],['A', 'A', 'A', 'A'],['W','W','W','W'],['H','H','H','H']], "");  

console.log(separateLiquids([['A', 'H', 'W', 'O']]));
//[['O','A','W','H']],"");

console.log(separateLiquids([['A'], ['H'], ['W'], ['O']]));
//[['O'],['A'],['W'],['H']],"")

console.log(separateLiquids([]));
// [], "Empty array should be returned if given.");