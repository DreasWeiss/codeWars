/*
// #1
function sortVowels(s){
    //code
    return typeof(s)!='string' ? '' :
                [...s].map(i=>!/[a,e,i,o,u]/i.test(i) ? i + '|' : '|' + i)
                        .join('\n');
}
*/


// #2
const sortVowels = s => typeof s !== 'string' ? '' : [...s].map(e => /[aeiou]/i.test(e) ? `|${e}` : `${e}|`).join('\n');



console.log(sortVowels('Codewars')); 
// 'C|\n|o\nd|\n|e\nw|\n|a\nr|\ns|'

console.log(sortVowels('Rnd Te5T')); 
// 'R|\nn|\nd|\n |\nT|\n|e\n5|\nT|'

console.log(sortVowels(1337)); 
// ''

console.log(sortVowels(undefined)); 
// ''
