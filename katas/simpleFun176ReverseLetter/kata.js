// #1
// function reverseLetter(str) {
//   //coding and coding..
//   return [...str].reverse().filter(i=>i.match(/[A-Za-z]/)).join('');
// }


// #2
const reverseLetter = str => str.match(/[a-z]/g).reverse().join('');


console.log(reverseLetter("krishan")); //"nahsirk"

console.log(reverseLetter("ultr53o?n")); //"nortlu"

console.log(reverseLetter("ab23c")); //"cba"

console.log(reverseLetter("krish21an")); //"nahsirk"