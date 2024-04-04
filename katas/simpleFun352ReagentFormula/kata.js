// #1
// function isValid(formula){
//     //coding and coding..
//     if (formula.includes(7) || formula.includes(8)) {
//         if ((formula.includes(5) && !formula.includes(6)) || (formula.includes(6) && !formula.includes(5))) {
//             return false;
//         } else if (formula.includes(3) && formula.includes(4)) {
//             return false;
//         } else if (formula.includes(1) && formula.includes(2)) {
//             return false;
//         }
//         return true;
//     } else return false;
// }


// #2
const isValid = f => !(f.includes(1) && f.includes(2)) &&
                     !(f.includes(3) && f.includes(4)) &&
                     f.includes(5) === f.includes(6) &&
                     (f.includes(7) || f.includes(8));



console.log(isValid([1,3,7])); //true

console.log(isValid([7,1,2,3])); //false

console.log(isValid([1,3,5,7])); //false

console.log(isValid([1,5,6,7,3])); //true

console.log(isValid([5,6,7])); //true

console.log(isValid([5,6,7,8])); //true

console.log(isValid([6,7,8])); //false

console.log(isValid([7,8])); //true

console.log(isValid([8,4])); //true