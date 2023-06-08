const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
const vowels = ['a', 'e', 'i', 'o', 'u'];

//#1
function replaceLetters(word) {
    return word.split('').map(i => {
        idx = alphabet.indexOf(i);
        if (vowels.includes(i)) {
            return alphabet.at(idx - 1);
        } else {
            for (let i = 1; i < 26; i++) {
                if (idx + i > 25) {
                    idx = 0;
                    i = 0;
                }
                if (vowels.includes(alphabet.at(idx + i))) {
                    return alphabet.at(idx + i)
                }
            }
        }
    }).join('')
}

// # 2
// function replaceLetters(word) {
//     return [...word].map(l =>{
//       if( consonants.includes(l) ){
//         let nextL = alphabet.slice( alphabet.indexOf(l) )
//                             .find( el => vowels.includes(el) );
//         return nextL || 'a';
//       } else if( vowels.includes(l) ) {
//         let precL = alphabet.slice(0, alphabet.indexOf(l) )
//                             .reverse()
//                             .find( el => consonants.includes(el) );
//         return precL || 'z';
//       }

//     }).join``;
//   }

console.log(replaceLetters('cat')); // 'ezu'
console.log(replaceLetters('codewars')); // 'enedazuu'
console.log(replaceLetters('abcdtuvwxyz')); // 'zeeeutaaaaa'