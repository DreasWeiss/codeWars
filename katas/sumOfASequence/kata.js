const sequenceSum = (begin, end, step) => {
    let count = begin;
    let sum = 0;

    while (count <= end) {
        sum += count;
        count += step
    }

    return sum;
};


console.log(sequenceSum(2, 6, 2)); // 12
console.log(sequenceSum(1, 5, 1)); // 15
console.log(sequenceSum(1, 5, 3)); // 5