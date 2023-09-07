// #1
// function trim(str, size) {
//     return str.length <= size ? 
//                 str :
//                 str.substring(0,str.length > 3 && size > 3 ? size-3 : size ) + '...' 
// }

// #2
const trim = (str, size) => str.length <= size ? str : str.slice(0, size - (size <= 3 ? 0 : 3)) + '...';


console.log(trim("Creating kata is fun", 14));
//"Creating ka..."

console.log(trim("He", 1));
//"H..."

console.log(trim("Code Wars is pretty rad", 50));
// "Code Wars is pretty rad"

console.log(trim("EqAw", 2));

