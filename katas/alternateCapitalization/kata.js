function capitalize(s) {
    return [s.split('').map((i, idx) => idx % 2 === 0 ? i.toUpperCase() : i.toLowerCase()).join(''), s.split('').map((i, idx) => idx % 2 === 1 ? i.toUpperCase() : i.toLowerCase()).join('')];
};

console.log(capitalize("abcdef"));
//['AbCdEf', 'aBcDeF']


console.log(capitalize("codewars"));
//['CoDeWaRs', 'cOdEwArS']


console.log(capitalize("abracadabra"));
//['AbRaCaDaBrA', 'aBrAcAdAbRa']


console.log(capitalize("codewarriors"));
//['CoDeWaRrIoRs', 'cOdEwArRiOrS']

