function maxProduct(a) {
    let biggest = Math.max.apply(Math, a);
    a.splice(a.indexOf(biggest), 1);

    return biggest * Math.max.apply(Math, a);
}


console.log(maxProduct([56, 335, 195, 443, 6, 494, 252]));
// 218842

console.log(maxProduct([154, 428, 455, 346]));
// 194740

console.log(maxProduct([39, 135, 47, 275, 37, 108, 265, 457, 2, 133, 316, 330, 153, 253, 321, 411]));
// 187827

console.log(maxProduct([136, 376, 10, 146, 105, 63, 234]));
// 87984

console.log(maxProduct([354, 463, 165, 62, 472, 53, 347, 293, 252, 378, 420, 398, 255, 89]));
// 218536

console.log(maxProduct([346, 446, 26, 425, 432, 349, 123, 269, 285, 93, 75, 14]));
// 192672

console.log(maxProduct([134, 320, 266, 299]));
// 95680

console.log(maxProduct([114, 424, 53, 272, 128, 215, 25, 329, 272, 313, 100, 24, 252]));
// 139496

console.log(maxProduct([375, 56, 337, 466, 203]));
// 174750
