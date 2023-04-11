function findNextSquare(sq) {
    if (Number.isInteger(Math.sqrt(sq))) {
        return Math.pow(Math.sqrt(sq) + 1, 2);
    } else {
        return -1;
    }
}

console.log(findNextSquare(121));
// 144, "Wrong output for 121"


console.log(findNextSquare(625));
// 676, "Wrong output for 625"


console.log(findNextSquare(319225));
// 320356, "Wrong output for 319225"


console.log(findNextSquare(15241383936));
// 15241630849, "Wrong output for 15241383936"


console.log(findNextSquare(155));
// -1, "Wrong output for 155"


console.log(findNextSquare(342786627));
// -1, "Wrong output for 342786627"

