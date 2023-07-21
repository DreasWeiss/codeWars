var capitals = function (word) {
    return word.split('')
        .map((i, idx) => i === i.toUpperCase() ? idx : null)
        .filter(i => i !== null)
};


console.log(capitals('CodEWaRs')); // [0,3,4,6]