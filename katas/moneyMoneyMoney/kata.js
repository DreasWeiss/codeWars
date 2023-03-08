function calculateYears(principal, interest, tax, desired) {
    let count = 0;

    while (principal < desired) {
        let pi = principal * interest;
        let pitax = pi - (pi * tax);

        principal += pitax;
        count++
    }
    return count;

}


console.log(calculateYears(1000, 0.05, 0.18, 1100));
// 3)


console.log(calculateYears(1000, 0.01625, 0.18, 1200));
// 14)


console.log(calculateYears(1000, 0.05, 0.18, 1000));
// 0)

