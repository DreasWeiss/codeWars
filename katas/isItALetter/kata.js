const isItLetter = char => /[a-z]/gi.test(char);


console.log(isItLetter('a')); //true`'a' is a letter` );
console.log(isItLetter('1')); //false `'1' is not a letter` );
console.log(isItLetter('[')); //false `'1' is not a letter` );
console.log(isItLetter('!')); //false `'1' is not a letter` );