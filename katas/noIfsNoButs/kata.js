function noIfsNoButs(a, b) {
    switch (true) {
        case (a === b): return `${a} is equal to ${b}`;
        case (a < b): return `${a} is smaller than ${b}`;
        case (a > b): return `${a} is greater than ${b}`;
    }
}

// not mine solution:
// const noIfsNoButs = (a, b) =>
//   a < b && `${a} is smaller than ${b}` ||
//   a > b && `${a} is greater than ${b}` ||
//   `${a} is equal to ${b}`


console.log(noIfsNoButs(45, 51)); // "45 is smaller than 51"
console.log(noIfsNoButs(1, 2)); // "1 is smaller than 2"
console.log(noIfsNoButs(-3, 2)); // "-3 is smaller than 2"
console.log(noIfsNoButs(1, 1)); // "1 is equal to 1"
console.log(noIfsNoButs(100, 100)); // "100 is equal to 100"
console.log(noIfsNoButs(100, 80)); // "100 is greater than 80"
console.log(noIfsNoButs(20, 19)); // "20 is greater than 19"