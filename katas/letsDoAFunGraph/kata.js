function graph(arr) {
    if (arr.length === 0) return '';
    if (arr.length === 1 && arr[0] === 0) return " ____  ^ 0"

    let arrSort = [...arr].sort((a, b) => a - b);
    let arrMax = arrSort[arr.length - 1];
    /*
    ............ ____ ............ ^ 5\n
    ............|    | ____ ...... | 4\n
    ...... ____ |    ||    |...... | 3\n
    ......|    ||    ||    |...... | 2\n
     ____ |    ||    ||    | ____  | 1\n
    |    ||    ||    ||    ||    | | 0
    */

    let graph = [];

    for (let j = 0; j <= arrMax; j++) {
        if (j === 0) {
            graph.push(` | ${j}`);
        } else if (j < arrMax) {
            graph.push(` | ${j}\n`);
        } else {
            graph.push(` ^ ${j}\n`);
        }
        for (let i = arr.length; i >= 0; i--) {
            if (arr[i] > j) {
                graph.push('|    |');
            }
            if (arr[i] === j) {
                graph.push(' ____ ');
            }
            if (arr[i] < j) {
                graph.push('......')
            }

        }
    }

    return graph.reverse().join('');
}


// BEST
/*
const graph = arr => 
  (h = Math.max(...arr),
  Array.from({length: h + 1}, (_, x) => 
    arr.reduce((a,b,i) => (a += b === x ? ' ____ ' : b < x ? '......' : '|    |', a), '') 
             + ` ${(x === h ? '^' : '|')} ${x}`)
   .reverse()
   .join('\n'));
*/




console.log(graph([1, 3, 5, 4, 1]));
// "............ ____ ............ ^ 5\n............|    | ____ ...... | 4\n...... ____ |    ||    |...... | 3\n......|    ||    ||    |...... | 2\n ____ |    ||    ||    | ____  | 1\n|    ||    ||    ||    ||    | | 0");



console.log(graph([1, 4, 2]));
// "...... ____ ...... ^ 4\n......|    |...... | 3\n......|    | ____  | 2\n ____ |    ||    | | 1\n|    ||    ||    | | 0");



console.log(graph([10, 5, 3, 1, 4]));
// " ____ ........................ ^ 10\n|    |........................ | 9\n|    |........................ | 8\n|    |........................ | 7\n|    |........................ | 6\n|    | ____ .................. | 5\n|    ||    |............ ____  | 4\n|    ||    | ____ ......|    | | 3\n|    ||    ||    |......|    | | 2\n|    ||    ||    | ____ |    | | 1\n|    ||    ||    ||    ||    | | 0");



console.log(graph([]));
// "");



console.log(graph([0]));
// " ____  ^ 0");