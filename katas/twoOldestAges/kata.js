// #1
// return the two oldest/oldest ages within the array of ages passed in.
// function twoOldestAges(ages){
//     let sorted = ages.sort((a,b)=>b-a);
//     return [sorted[1], sorted[0]];
// }


// #2
function twoOldestAges(ages) {
    return ages.sort(function (a, b) { return a - b; }).slice(-2);
}


console.log(twoOldestAges([1, 2, 10, 8])); //-- > [8, 10]
console.log(twoOldestAges([1, 5, 87, 45, 8, 8])); //-- > [45, 87]
console.log(twoOldestAges([1, 3, 10, 0])); //-- > [3, 10]