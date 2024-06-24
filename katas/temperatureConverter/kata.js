function convertTemp(temp, from_scale, to_scale){
    // ...
}

console.log(convertTemp(-30, "De", "K")); // 393
console.log(convertTemp(40, "Re", "C")); // 50
console.log(convertTemp(60, "De", "F")); // 140
console.log(convertTemp(666, "K", "K")); // 66
console.log(convertTemp(393, "K", "De")); // -30
console.log(convertTemp(50, "C", "Re")); // 40
console.log(convertTemp(140, "F", "De")); // 60