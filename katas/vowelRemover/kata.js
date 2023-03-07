// # 1
// function shortcut(string) {
//     return string.replace(/[aeiou]/g,'');
// }



// # 2
const shortcut = s => s.replace(/[aeiou]/g, '');

console.log(shortcut('hello'));
// 'hll');

console.log(shortcut('how are you today?'));
// 'hw r y tdy?');

console.log(shortcut('complain'));
// 'cmpln');

console.log(shortcut('never'));
// 'nvr');
