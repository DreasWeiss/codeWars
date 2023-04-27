function sortEmotions(arr, order) {
    let position = [':D', ':)', ':|', ':(', 'T_T'];

    if (order === false) position = position.reverse();

    return arr.map(i => [i, position.indexOf(i)])
        .sort((a, b) => a[1] - b[1])
        .map(i => i[0]);
}



console.log(sortEmotions([':D', 'T_T', ':D', ':('], true));
// [ ':D', ':D', ':(', 'T_T' ]


console.log(sortEmotions(['T_T', ':D', ':(', ':('], true));
// [ ':D', ':(', ':(', 'T_T' ]


console.log(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], true));
// [ ':D', ':D', ':)', ':)', 'T_T' ]


console.log(sortEmotions([':D', 'T_T', ':D', ':('], false));
// [ 'T_T', ':(', ':D', ':D' ]


console.log(sortEmotions(['T_T', ':D', ':(', ':('], false));
// [ 'T_T', ':(', ':(', ':D' ]


console.log(sortEmotions([':)', 'T_T', ':)', ':D', ':D'], false));
//  [ 'T_T', ':)', ':)', ':D', ':D' ]


console.log(sortEmotions([], false));
// []


console.log(sortEmotions([], true));
// []

