function reverseVowels(str) {
    let vowels = str.match(/[aeiou]/gi);
    return str.replace(/[aeiou]/gi, () => vowels.pop());
}


console.log(reverseVowels("Hello!"));
// "Holle!"

console.log(reverseVowels("Tomatoes"));
// "Temotaos"

console.log(reverseVowels("Reverse Vowels In A String"));
// "RivArsI Vewols en e Streng"
