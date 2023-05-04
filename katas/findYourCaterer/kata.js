function findCaterer(budget, people) {
    if (budget <= 0 || people <= 0) return -1;
    let b = budget / people;
    let prices = [15, 20, 30, 24];
    if (people > 60 && b >= prices[3]) return 3;
    if (b >= prices[2]) return 3;
    if (b >= prices[1]) return 2;
    if (b >= prices[0]) {
        return 1
    } else {
        return -1;
    };
}


//1
console.log(findCaterer(150, 10));

//2
console.log(findCaterer(1500, 60));

//3
console.log(findCaterer(1500, 61));

//-1
console.log(findCaterer(100, 0));

//3
console.log(findCaterer(200, 5));

//2
console.log(findCaterer(1000, 45));

//-1
console.log(findCaterer(940, 70));