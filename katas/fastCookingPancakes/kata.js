const cookPancakes = (n, m) => n < m ? 2 : Math.ceil(2 * n / m);


console.log(cookPancakes(1, 2)); // 2
console.log(cookPancakes(2, 2)); // 2
console.log(cookPancakes(4, 2)); // 4