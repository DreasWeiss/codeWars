// # 1
// function removeUrlAnchor(url) {
//     return url.replace(/#[a-zA-Z0-9]*/, '')
// }



// #2
// const removeUrlAnchor = u => u.replace(/#\w*/, '');



// #3
const removeUrlAnchor = u => u.split('#')[0];



console.log(removeUrlAnchor('www.codewars.com#about'));
// 'www.codewars.com')

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
// 'www.codewars.com/katas/?page=1')

console.log(removeUrlAnchor('www.codewars.com/katas/'));
// 'www.codewars.com/katas/')
