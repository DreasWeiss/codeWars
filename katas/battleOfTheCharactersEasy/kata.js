// #1
// function battle(x, y) {
//     let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//     let first = x.split('').reduce((acc,i)=> acc + (arr_EN.indexOf(i)+1),0);
//     let second = y.split('').reduce((acc,i)=> acc + (arr_EN.indexOf(i)+1),0);

//     return  first === second ? 'Tie!' : first > second ? x : y;
// }


// #2
const battle = (x, y) => {
    let a = [[...x], [...y]].map(i => i.reduce((acc, i) => acc + i.charCodeAt(0) - 64, 0));
    return a[0] === a[1] ? 'Tie!' : a[0] > a[1] ? x : y;
}


console.log(battle("AAA", "Z"));//, "Z", "Unfair fight!"));
console.log(battle("ONE", "TWO"));//, "TWO", "Unfair fight!"));
console.log(battle("ONE", "NEO"));//, "Tie!", "Unfair fight!"));
console.log(battle("FOUR", "FIVE"));//, "FOUR", "Unfair fight!"));