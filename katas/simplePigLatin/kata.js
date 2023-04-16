function pigIt(str) {
    return str.split(' ').map(i => {
        if (i.match(/[a-zA-Z]/g)) {
            return `${i.slice(1)}${i.slice(0, 1)}ay`
        }
        return i;
    }).join(' ');
}

console.log(pigIt('Pig latin is cool'));
//'igPay atinlay siay oolcay'


console.log(pigIt('This is my string'));
//'hisTay siay ymay tringsay'

