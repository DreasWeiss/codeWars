function findMissingLetter(array) {
    let abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let arrSorted = [...array].sort().map(i => i.toLowerCase());
    let correctArr = abc.slice(abc.indexOf(arrSorted[0]), abc.indexOf(arrSorted[arrSorted.length - 1]));

    let missingLetter = correctArr.filter(i => {
        if (!arrSorted.includes(i)) return i;
    });

    return arrSorted.includes(array[0]) ?
        missingLetter[0] : missingLetter[0].toUpperCase();
}


console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f'])); // 'e'
console.log(findMissingLetter(['O', 'Q', 'R', 'S'])); // 'P'