function squaresNeeded(grains) {
    return grains < 1 ? 0 : 1 + (squaresNeeded(grains / 2));
}


console.log(squaresNeeded(0)); // 0, 'n=0');
console.log(squaresNeeded(1)); // 1, 'n=1');
console.log(squaresNeeded(2)); // 2, 'n=2');
console.log(squaresNeeded(3)); // 2, 'n=3');
console.log(squaresNeeded(4)); // 3, 'n=4');