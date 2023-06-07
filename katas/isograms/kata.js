// #1
// function isIsogram(str) {
//     let lowerArray = str.toLowerCase().split("");
//     let x = Array.from(new Set(lowerArray));

//     if (x.length === lowerArray.length || lowerArray.length === 0) {
//       return true;
//     } else {
//       return false;
//     }
// }


// #2
// function isIsogram(str) {
//     return str.toLowerCase().split('').sort().join('') === Array.from(new Set(str.toLowerCase().split(''))).sort().join('')
// }


// #3
function isIsogram(str) {
    return new Set(str.toUpperCase()).size == str.length;
}


console.log(isIsogram("Dermatoglyphics"));
// true 

console.log(isIsogram("isogram"));
// true 

console.log(isIsogram("aba"));
// false, "same chars may not be adjacent" 

console.log(isIsogram("moOse"));
// false, "same chars may not be same case" 

console.log(isIsogram("isIsogram"));
// false 

console.log(isIsogram(""));
// true, "an empty string is a valid isogram" 
