function pillars(numPill, dist, width) {
    return numPill === 1 ? 0 :
        ((numPill - 2) * width) + ((numPill - 1) * 100 * dist);
}

console.log(pillars(1, 10, 10)); // 0

console.log(pillars(2, 20, 25)); // 2000

console.log(pillars(11, 15, 30)); // 15270