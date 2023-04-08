function getLengthOfMissingArray(arrayOfArrays) {
    const l = (arrayOfArrays || [])
        .map(a => a ? a.length : 0)
        .sort((a, b) => a - b)

    if (l.includes(0)) {
        return 0
    }

    for (let i = 0; i < l.length - 1; i++) {
        if (l[i] + 1 !== l[i + 1]) {
            return l[i] + 1
        }
    }

    return 0
}


console.log(getLengthOfMissingArray([[4], [4, 4, 3, 1], [], [1, 0, 0]]));
// 0


console.log(getLengthOfMissingArray([[], [0, 2], [2, 1, 0]]));
// 0


console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
// 3


console.log(getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
// 2


console.log(getLengthOfMissingArray([[null], [null, null, null]]));
// 2


console.log(getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']]));
// 5



console.log(getLengthOfMissingArray([]));
// 0

