// function uglify_word(s) {
//     // your code here
//     s = s.toLowerCase().split("");
//     let flag = 1;
//     for (let i = 0; i < s.length; i++) {
//         if (/[a-z]/.test(s[i])) {
//             if (flag === 1) {
//                 let str = s[i].toUpperCase();
//                 s[i] = str;
//                 flag = 0;
//             } else {
//                 let str = s[i].toLowerCase();
//                 s[i] = str;
//                 flag = 1;
//             }
//         } else {
//             flag = 1;
//         }
//     }
//     return s.join(``);
// }

function uglifyWord(s) {
    return s.replace(/[a-z]+/ig, x => x.split``.map((y, i) => i % 2 ? y.toLowerCase() : y.toUpperCase()).join``)
}


console.log(uglify_word("aaa")); //"AaA"
console.log(uglify_word("AAA")); //"AaA"
console.log(uglify_word("BbB")); //"BbB"
console.log(uglify_word("aaa-bbb-ccc")); //"AaA-BbB-CcC"
console.log(uglify_word("AaA-BbB-CcC")); //"AaA-BbB-CcC"
console.log(uglify_word("eeee-ffff-gggg")); //"EeEe-FfFf-GgGg"
console.log(uglify_word("EeEe-FfFf-GgGg")); //"EeEe-FfFf-GgGg"
console.log(uglify_word("qwe123asdf456zxc")); //"QwE123AsDf456ZxC"
console.log(uglify_word("Hello World")); //"HeLlO WoRlD"