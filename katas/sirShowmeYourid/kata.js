// #1
// function showMe(yourID) {
//     return yourID.split(' ').length == 1 && 
//     yourID.split('-').length == 
//     yourID.split('-').filter(i=>i.match(/(^[A-Z])([a-z])+$/)).length
// }


// #2
const showMe = yourID => /^[A-Z][a-z]+(\-[A-Z][a-z]+)*$/.test(yourID)


console.log(showMe("Francis")); // true
console.log(showMe("Jean-Eluard")); // true
console.log(showMe("Le Mec")); // false
console.log(showMe("Bernard-Henry-Levy")); // true
console.log(showMe("Mémé Gertrude")); // false
console.log(showMe("YjtxkvDtkes")); // false