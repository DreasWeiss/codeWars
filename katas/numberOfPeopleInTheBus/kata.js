const number = function (busStops) {
    return busStops.reduce((acc, i) => acc + (i[0] - i[1]), 0);
}

// 
// var number = function(busStops){
//     return busStops.reduce((acc,[on, off]) => acc + on - off, 0);
//   }

console.log(number([[10, 0], [3, 5], [5, 8]])); //5
console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]])); //17
console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]])); //21
console.log(number([[0, 0]])); //0