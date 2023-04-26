function findHack(arr) {
    const scores = {
        'A': 30,
        'B': 20,
        'C': 10,
        'D': 5
    }
    let answ = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        if (arr[i][2].length >= 5 &&
            arr[i][2].length === arr[i][2]
                .filter((s) => s === 'A' | s === 'B').length) {
            count += 20;
        }
        arr[i][2].map((i) => {
            if (scores.hasOwnProperty(i)) {
                count += scores[i]
            }
        })
        if (count !== arr[i][1]) {
            answ.push(arr[i][0])
        }
    }

    return answ;
}

var array = [
    ["name1", 150, ["B", "A", "A", "C", "A", "A"]],
    ["name2", 120, ["B", "A", "A", "A"]],
    ["name3", 160, ["B", "A", "A", "A", "A"]],
    ["name4", 140, ["B", "A", "A", "C", "A"]]
];

console.log(findHack(array)) // ["name2","name4"]