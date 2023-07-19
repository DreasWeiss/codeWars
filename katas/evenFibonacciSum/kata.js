function fibonacci(max) {
    let fib = [0, 1];
    let i = 0;
    let counter = 1;
    let sum = 0;
    while (i < max) {
        if (i % 2 === 0) {
            sum += i;
        }
        i = fib[counter] + fib[counter - 1];
        fib.push(i);
        counter += 1;
    }
    return sum;

}


console.log(fibonacci(2147483647)); // 1485607536
console.log(fibonacci(1000000000)); // 350704366
console.log(fibonacci(100000000)); // 82790070
console.log(fibonacci(1000000)); // 1089154
console.log(fibonacci(1000)); // 798
console.log(fibonacci(100)); // 44
console.log(fibonacci(5)); // 2
console.log(fibonacci(8)); // 2
console.log(fibonacci(10)); // 10
console.log(fibonacci(1)); // 0