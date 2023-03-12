var countSheep = function (num) {
    let sheeps = '';

    for (let i = 1; i <= num; i++) {
        sheeps += `${i} sheep...`
    }

    return sheeps;
}


console.log(countSheep(0));
// "");


console.log(countSheep(1));
// "1 sheep...");


console.log(countSheep(2));
// "1 sheep...2 sheep...");


console.log(countSheep(3));
// "1 sheep...2 sheep...3 sheep...");

