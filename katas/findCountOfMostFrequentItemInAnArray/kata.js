function mostFrequentItemCount(collection) {
    // Do your magic. :)
    let a = collection.sort((a, b) =>
        collection.filter(i => i === b).length
        - collection.filter(i => i === a).length)[0]

    return collection.filter(i => i === a).length;
}


console.log(mostFrequentItemCount([3, -1, -1]));
// 2

console.log(mostFrequentItemCount([3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]));
// 5