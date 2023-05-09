function sortByArea(array) {
    return array.map((i, idx) => {
        return Array.isArray(i) ? [i[0] * i[1], idx] : [i * i * +Math.PI, idx]
    }).sort((a, b) => a[0] - b[0]).map(i => array[i[1]]);;
}


console.log(sortByArea([[4.23, 6.43], 1.23, 3.444, [1.342, 3.212]]));
// [ [1.342, 3.212], 1.23, [4.23, 6.43], 3.444 ] 
console.log(sortByArea([[2, 5], 6]));
// [ [2, 5], 6 ]
console.log(sortByArea([]));
// [] 