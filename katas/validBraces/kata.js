// #1
// function validBraces(braces) {
//     let open = ['(', '[', '{'];
//     let close = [')', ']', '}'];
//     let arr = [];

//     for (let i = 0; i < braces.length; i++){
//         if (open.includes(braces[i])) {
//             arr.push(braces[i]);
//         } else {
//             if (close.indexOf(braces[i]) === open.indexOf(arr[arr.length-1])){
//                 arr.pop()
//             } else {
//                 return false;
//             }
//         }
//     } 

//     return arr.length === 0;
// }


// # 2
// function validBraces(braces){
//  while (/\(\)|\[\]|\{\}/g.test(braces)) {
//     braces = braces.replace(/\(\)|\[\]|\{\}/g,"")
// }
//  return !braces.length;
// }

// #3
const validBraces = (b) => /\(\)|\{\}|\[\]/.test(b) ? validBraces(b.replace(/\(\)|\{\}|\[\]/, '')) : '' === b;




console.log(validBraces("()))")); // false
console.log(validBraces("()")); // true
console.log(validBraces("[]")); // true
console.log(validBraces("{}")); // true
console.log(validBraces("(){}[]")); // true
console.log(validBraces("([{}])")); // true
console.log(validBraces("(}")); // false
console.log(validBraces("[(])")); // false
console.log(validBraces("({})[({})]")); // true
console.log(validBraces("(})")); // false
console.log(validBraces("(({{[[]]}}))")); // true
console.log(validBraces("{}({})[]")); // true
console.log(validBraces(")(}{][")); // false
console.log(validBraces("())({}}{()][][")); // false
console.log(validBraces("(((({{")); // false
console.log(validBraces("}}]]))}])")); // false