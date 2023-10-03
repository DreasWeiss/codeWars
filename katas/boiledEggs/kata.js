function cookingTime(eggs) {
    return Math.ceil(eggs / 8) * 5;
}


console.log(cookingTime(0));//, 0, '0 eggs');
console.log(cookingTime(5));//, 5, '5 eggs');
console.log(cookingTime(10));//, 10, '10 eggs');
console.log(cookingTime(835));// 525
console.log(cookingTime(20));// 15
