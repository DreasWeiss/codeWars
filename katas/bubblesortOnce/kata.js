function bubblesortOnce(a) {
    // TODO
    let bso = [...a];

    for (let i = 0; i < bso.length - 1; i++) {
        if (bso[i] > bso[i + 1]) {
            [bso[i], bso[i + 1]] = [bso[i + 1], bso[i]]
        }
    }

    return bso;
}


console.log(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]));
// [7, 5, 3, 1, 2, 4, 6, 8, 9]