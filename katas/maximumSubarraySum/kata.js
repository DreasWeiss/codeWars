var maxSequence = function (arr) {
    let maxSeq = 0;
    let currSeq = 0;
    for (let x of arr) {
        currSeq = Math.max(0, currSeq + x);
        maxSeq = Math.max(currSeq, maxSeq);
    }
    return maxSeq;
}


console.log(maxSequence([])); // 0
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6