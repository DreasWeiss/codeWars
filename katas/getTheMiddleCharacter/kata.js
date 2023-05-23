// #1
// function getMiddle(s) {
//     return s.length % 2 === 0 ? 
//         s.substring(Math.floor(s.length/2)-1, Math.floor(s.length/2)+1) :
//         s[Math.floor(s.length/2)];
// }


// #2
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}


console.log(getMiddle("test")); //"es"
console.log(getMiddle("testing")); //"t"
console.log(getMiddle("middle")); //"dd"
console.log(getMiddle("A")); //"A"