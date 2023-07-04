function toDayOfYear(arr) {
    let days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (arr[2] % 4 === 0 && (arr[2] % 400 === 0 || arr[2] % 100 !== 0)) {
        days[1] = 29;
    }
    return arr[0] + (days.splice(0, arr[1] - 1).reduce((acc, i) => acc + i, 0));
}


console.log(toDayOfYear([25, 12, 2017]));// 359
console.log(toDayOfYear([31, 10, 1991]));// 304
console.log(toDayOfYear([1, 5, 3000]));// 121
console.log(toDayOfYear([14, 3, 1066]));// 73
console.log(toDayOfYear([5, 11, 1604]));// 310
console.log(toDayOfYear([31, 12, 2000]));// 366
console.log(toDayOfYear([31, 12, 2001]));// 365
console.log(toDayOfYear([31, 12, 2004]));// 366
console.log(toDayOfYear([31, 12, 2100]));// 365
console.log(toDayOfYear([1, 3, 2020]));