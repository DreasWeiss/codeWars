// #1
// function periodIsLate(last, today, cycleLength) {
//     return Boolean(Math.floor((today.getTime()-last.getTime())/86400000 > cycleLength));
// }


// #2
function periodIsLate(last, today, cycleLength) {
    return (today - last) / 86400000 > cycleLength
}


console.log(periodIsLate(new Date(2016, 6, 13),
    new Date(2016, 7, 16), 35));
// false

console.log(periodIsLate(new Date(2016, 6, 13),
    new Date(2016, 7, 16), 28));
// true