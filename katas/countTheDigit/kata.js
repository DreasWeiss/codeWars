function nbDig(n, d) {
    let res = 0;
    for (let i = 0; i <= n; i++) {
        let sq = (i * i + '').split('');
        sq.forEach((s) => s == d ? res++ : null)
    } return res;
}



console.log(nbDig(5750, 0)); //  4700, "n = 5750, d = 0");
console.log(nbDig(11011, 2)); //  9481, "n = 11011, d = 2");
console.log(nbDig(12224, 8)); //  7733, "n = 12224, d = 8");
console.log(nbDig(11549, 1)); // 11905, "n = 11549, d = 1");