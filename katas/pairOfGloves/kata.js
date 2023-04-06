function numberOfPairs(gloves) {
    let glovesMap = new Map();
    let arr = [];

    gloves.map(i => glovesMap.set(i, 0));
    glovesMap.forEach((value, key) => {
        glovesMap.set(key, gloves.filter((i) => i === key).length);
    })
    glovesMap.forEach((key) => arr.push(key));
    arr = arr.filter(i => i >= 2);
    let answer = 0;

    for (let i = 0; i < arr.length; i++) {
        while (arr[i] >= 2) {
            arr[i] = arr[i] - 2;
            answer++
        }
    }

    return answer;
}

console.log(numberOfPairs(['red', 'red']));
// 1

console.log(numberOfPairs(['red', 'green', 'blue']));
// 0

console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']));
// 3