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
