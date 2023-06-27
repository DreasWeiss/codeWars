function dominator(arr) {
    let m = [...(new Set(arr))].map((i, idx) => [i, arr.filter(a => a === i).length, idx]).sort((a, b) => b[1] - a[1]);

    return m[0][1] > arr.length / 2 ? m[0][0] : -1;
}


console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3])); //3
console.log(dominator([1, 2, 3, 4, 5])); //-1
console.log(dominator([1, 1, 1, 2, 2, 2])); //-1
console.log(dominator([1, 1, 1, 2, 2, 2, 2])); //2