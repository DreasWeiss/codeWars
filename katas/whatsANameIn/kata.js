// #1
// function nameInStr(str, name) {
//     let r = name.toLowerCase().split('');
//     let s = str.toLowerCase().split('');

//     let k = 0;
//     let answer = ''
//     for (let i = 0; i < r.length; i++) {
//         for (k; k < s.length; k++){
//             if(r[i] === s[k]){
//                 answer+=r[i]
//                 k = k+1
//                 break;
//             }
//         }
//     }
//     return answer===name.toLowerCase();
// }


// #2
// function nameInStr(str, name){
//     name = name.toLowerCase()
//     str = str.toLowerCase()

//     let index = 0

//     for (let char of str) {
//       if (char === name[index])
//         index++
//     }

//     return index === name.length
//   }


// #3
const nameInStr = (str, name) =>
    new RegExp([...name].join(`.*`), `i`).test(str);


console.log(nameInStr('Across the rivers', 'chris'));
// true

console.log(nameInStr('Next to a lake', 'chris'));
// false

console.log(nameInStr('Under a sea', 'chris'));
// false

console.log(nameInStr('A crew that boards the ship', 'chris'));
// false

console.log(nameInStr('A live son', 'Allison'));
// false
