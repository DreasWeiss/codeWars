function isLeapYear(year) {
    return year % 4 === 0 && (year % 400 === 0 || year % 100 !== 0)
}


console.log(isLeapYear(1234)); // false, 'Year 1234'
console.log(isLeapYear(1984)); // true, 'Year 1984'
console.log(isLeapYear(2000)); // true, 'Year 2000'
console.log(isLeapYear(2010)); // false, 'Year 2010'
console.log(isLeapYear(2013)); // false, 'Year 2013'