// #1
// function scramble(str1, str2) {
//     var hashtab = [...new Array(256)].map(x => 0);
//     console.table(hashtab)

//     str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
//     str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);

//     hashtab = hashtab.filter (x=>x > 0);

//     return hashtab.length == 0;
//   }


// #2
function scramble(str1, str2) {
    let a = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
    return str2.split("").every((i) => --a[i] >= 0);
}


console.log(scramble('rkqodlw', 'world')); // true 
console.log(scramble('cedewaraaossoqqyt', 'codewars')); // true 
console.log(scramble('katas', 'steak')); // false
console.log(scramble('scriptjavx', 'javascript')); // false
console.log(scramble('scriptingjava', 'javascript')); // true 
console.log(scramble('scriptsjava', 'javascripts')); // true 
console.log(scramble('javscripts', 'javascript')); // false
console.log(scramble('jscripts', 'javascript')); // false
console.log(scramble('aabbcamaomsccdd', 'commas')); // true 
console.log(scramble('commas', 'commas')); // true 
console.log(scramble('sammoc', 'commas')); // true
console.log(scramble('arvknysgrlulvvgtpvpaypfjqivzclwhuiisdluollgbdpfuzijgyjhmwyxaabuzvtxuarglewmkyfgrspzjzluczlgwzqyyhdlarnseeppjaapcgkemcurvcclxwyzhswkagopqwrjpzqtyiwgansmerzencdbwdezjvhkpsabpdxwieobfowkspcnkxyrerqwseoujguklvwodslahxpluswyeridmpwgmqtefilaklacjswaeucjcgnvznifrbpgvgiydtedummqywzcljxpzeeyokbuuzucqifsmzzmvbvjk', 'teghmjaxumunqqkepannnnlelaaslekzsbssnlpifhqvyllfzxpdjyuipvbtqkslszqixtksjeezyzdivssigniutcojwcxkqacljhqbkipejzfntgrffpiyefpbmgnuckfrqpvtxkcuofcweehmqnfbwbzbqublfhdaenaorqwclyekdhcykdiglckzqdhgadsaz')); // false
