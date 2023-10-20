const start = Date.parse(2016, 1, 1);

function dateNbDays(a0, a, p) {
    // your code
    let t = a0;
    let days = 0;

    while (t < a) {
        t += (t * p / 100) / 360;
        days++
    }

    return new Date(days * 24 * 60 * 60 * 1000 + start).toISOString().substring(0, 10)
}


console.log(dateNbDays(4281, 5087, 2)); // "2024-07-03"
console.log(dateNbDays(4620, 5188, 2)); // "2021-09-19"
console.log(dateNbDays(9999, 11427, 6)); // "2018-03-13"
console.log(dateNbDays(3525, 4822, 3)); // "2026-04-18"
console.log(dateNbDays(5923, 6465, 6)); // "2017-06-10"
console.log(dateNbDays(4254, 4761, 8)); // "2017-05-22"
console.log(dateNbDays(1244, 2566, 4)); // "2033-11-04"
console.log(dateNbDays(6328, 7517, 5)); // "2019-05-25"
console.log(dateNbDays(2920, 3834, 2)); // "2029-06-03"
console.log(dateNbDays(7792, 8987, 4)); // "2019-07-09"