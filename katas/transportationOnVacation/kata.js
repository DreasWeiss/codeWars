function rentalCarCost(d) {
    if (d < 3) {
        return d * 40;
    }

    if (d >= 3 && d < 7) {
        return d * 40 - 20
    }

    if (d >= 7) {
        return d * 40 - 50
    }
}



console.log(rentalCarCost(1));
// 40

console.log(rentalCarCost(2));
// 80

console.log(rentalCarCost(3));
// 100

console.log(rentalCarCost(4));
// 140

console.log(rentalCarCost(5));
// 180

console.log(rentalCarCost(6));
// 220
