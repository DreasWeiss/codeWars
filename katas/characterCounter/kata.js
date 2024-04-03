// #1
// function validateWord(s)
// {
//   //Code goes here!
//   let c = {};
//   for ( let char of s.toLowerCase()) {
//     if (c[char] === undefined) { c[char] = 0}
//     c[char]++
//   }
// return Math.max(...Object.values(c)) === Math.min(...Object.values(c));
// }


// #2
function validateWord(s, c = s.toLowerCase())
{
    //Code goes here!
	return c.length % new Set(c).size == 0
}



console.log(validateWord("abcabc"));
//,true, "The word was: \"abcabc\" \n");

console.log(validateWord("Abcabc"));
//,true, "The word was: \"Abcabc\" \n");

console.log(validateWord("abc123"));
//,true, "The word was: \"abc123\" \n");

console.log(validateWord("abcabcd"));
//,false, "The word was: \"abcabcd\" \n");

console.log(validateWord("abc!abc!"));
//,true, "The word was: \"abc!abc!\" \n");

console.log(validateWord("abc:abc"));
//,false, "The word was: \"abc:abc\" \n");
