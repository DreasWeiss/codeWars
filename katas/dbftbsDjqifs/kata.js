// #1
// function encryptor(key, message) {
//     let arr_en = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//     let ke = key%26;

//     return message
//             .split('')
//             .map(i=> {
//                 if (arr_en.includes(i.toLowerCase())) {
//                     if (i.toUpperCase()===i) {
//                         let arrIdx = arr_EN.indexOf(i);
//                         let k = arrIdx+ke; 
//                         if (k <= 25 && k>=0) {
//                             return i = arr_EN[k]
//                         } else if (k < 0) {
//                             return i = arr_EN[26+k%26]
//                         } else {
//                             return i = arr_EN[k%26]
//                         }
//                     } else {
//                         let arrIdx = arr_en.indexOf(i);
//                         let k = arrIdx+ke; 
//                         if (k <= 25 && k >= 0) {
//                             return i = arr_en[k]
//                         } else if (k < 0) {
//                             return i = arr_en[26+k%26]
//                         } else {
//                             return i = arr_en[k%26]
//                         }
//                     }
//                 } else {
//                     return i = i;
//                 }   
//             })
//             .join('')
// }

// #2
function encryptor(key, message) {
    let k = (key % 26 + 26) % 26;
    return message.replace(/a-z/gi, l => {
        const s = (l >= 'a') ? 97 : 65;
        return String.fromCharCode((l.CharCodeAt(0) - s + k) % 26 + s);
    });
}


console.log(encryptor(-98, "xTR_5`rx(Z}miBzU?d/2@"));// expected 'dZX_5`xd(F}soHf?j/2@' to equal 'dZX_5`xd(F}soHfA?j/2@'
console.log(encryptor(-21, "a3ho:9xg{Sk=&RSSNv3]iJaWy!bsl.{a*,OqL$9n"));// 'f3mt:9cl{Xp=&WXXSa3]nOfBd!gxq.{f*,TvQ…'
console.log(encryptor(0, 'a'));// ''
console.log(encryptor(0, 'z'));// ''
console.log(encryptor(0, 'A'));// ''
console.log(encryptor(0, 'Z'));// ''
console.log(encryptor(13, ''));// ''
console.log(encryptor(0, 'no cypher'));// 'no cypher'
console.log(encryptor(13, 'Caesar Cipher'));// 'Pnrfne Pvcure'
console.log(encryptor(-5, 'Hello World!'));// 'Czggj Rjmgy!'
console.log(encryptor(27, 'Whoopi Goldberg'));// 'Xippqj Hpmecfsh'