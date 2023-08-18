// #1
// var AmIAfraid = function (day, num) {
//     //Help me...
//     const afraid = {
//         Monday(i){return i===12},
//         Tuesday(i){return i>95},
//         Wednesday(i){return i===35},
//         Thursday(i){return i===0},
//         Friday(i){return i%2===0},
//         Saturday(i){return i===56},
//         Sunday(i){return i===666 || i===-666} 
//     }

//     return afraid[day](num)
// }


// #2
// var AmIAfraid = function(day, num) {
//     var afraid = {"Sunday":    d => d == 666 || d == -666,
//                  "Monday":    d => d == 12,
//                  "Tuesday":   d => d > 95,
//                  "Wednesday": d => d == 34,
//                  "Thursday":  d => d === 0,
//                  "Friday":    d => d % 2 === 0,
//                  "Saturday":  d => d == 56};
//     return afraid[day](num);
//   }


// #3
function AmIAfraid(day, num) {
    return {
        "Monday": num === 12,
        "Tuesday": num > 95,
        "Wednesday": num === 34,
        "Thursday": num === 0,
        "Friday": num % 2 === 0,
        "Saturday": num === 56,
        "Sunday": Math.abs(num) === 666
    }[day];
}


console.log(AmIAfraid("Monday", 13));
// false, 'Should return false'

console.log(AmIAfraid("Sunday", -666));
// true, 'Should return true'

console.log(AmIAfraid("Tuesday", 2));
// false, 'Should return false'

console.log(AmIAfraid("Tuesday", 965));
// true, 'Should return true'

console.log(AmIAfraid("Friday", 2));
// true, 'Should return true'
