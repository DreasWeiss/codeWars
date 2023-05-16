// #1
// function mostLikely(prob1, prob2) {
//     return prob1.split(':')[0]/prob1.split(':')[1] > prob2.split(':')[0]/prob2.split(':')[1]
// }

// #2
function mostLikely(prob1, prob2) {
    return prob1.split(':').reduce((a, b) => a / b) > prob2.split(':').reduce((a, b) => a / b);
}


console.log(mostLikely('1:3', '1:2'));
// false