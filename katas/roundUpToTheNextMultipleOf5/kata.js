function roundToNext5(n) {
    return n % 5 === 0 ? n : roundToNext5(n + 1);
}


console.log(roundToNext5(0)); //0
console.log(roundToNext5(1)); //5
console.log(roundToNext5(-1)); //0
console.log(roundToNext5(-5)); //-5
console.log(roundToNext5(3)); //5
console.log(roundToNext5(5)); //5
console.log(roundToNext5(7)); //10
console.log(roundToNext5(20)); //20
console.log(roundToNext5(39)); //40
console.log(roundToNext5(990)); //990
console.log(roundToNext5(121)); //125
console.log(roundToNext5(555)); //55