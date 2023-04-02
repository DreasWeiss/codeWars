function rot13(str) {
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    let rot = str.split('')
        .map((i, index) => {
            let idx = abc.indexOf(i.toLowerCase());
            if (idx === -1) return i;
            if (idx >= 0 && idx < 13) {
                if (str[index] === abc[idx]) {
                    return abc[idx + 13];
                } else {
                    return abc[idx + 13].toUpperCase();
                }
            } else {
                if (str[index] === abc[idx]) {
                    return abc[idx - 13];
                } else {
                    return abc[idx - 13].toUpperCase();
                }
            }
        }).join('');
    return rot;
}

console.log(rot13("EBG13 rknzcyr."));
// "ROT13 example."

console.log(rot13("This is my first ROT13 excercise!"));
// "Guvf vf zl svefg EBG13 rkprepvfr!"