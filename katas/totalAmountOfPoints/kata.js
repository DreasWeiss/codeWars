// # 1
// function points(games) {
//     return games
//         .map(i => i.split(':').map(i => +i))
//         .reduce((acc, i) => i[0] === i[1] ? acc + 1 :
//             i[0] > i[1] ? acc + 3 : acc, 0);
// }

// # 2
const points = games => games.reduce((acc, i) => {
    return acc += i[0] > i[2] ? 3 : i[0] === i[2] ? 1 : 0;
}, 0);

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));  // , 30);
console.log(points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"]));  // , 10);
console.log(points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"]));  // , 0);
console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"]));  // , 15);
console.log(points(["1:0", "2:0", "3:0", "4:4", "2:2", "3:3", "1:4", "2:3", "2:4", "3:4"]));  // , 12);