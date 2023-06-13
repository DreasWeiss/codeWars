function getRealFloor(n) {
    return n <= 0 ? n : n <= 13 ? n - 1 : n - 2;
}



console.log(getRealFloor(1));//  0
console.log(getRealFloor(5));//  4
console.log(getRealFloor(15));// 13
console.log(getRealFloor(-2));// -2