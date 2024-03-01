function position(letter){
    //Write your own Code!
    return `Position of alphabet: ${letter.toLowerCase().charCodeAt()-96}`
}

console.log(position("a")); //"Position of alphabet: 1"
console.log(position("z")); //"Position of alphabet: 26"
console.log(position("e")); //"Position of alphabet: 5"