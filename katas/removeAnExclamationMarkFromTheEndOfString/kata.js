function remove(string) {
    //coding and coding....
    return string[string.length - 1] === '!' ? string.slice(0, string.length - 1) : string;
}


console.log(remove("Hi!"));  // "Hi"
console.log(remove("Hi!!!"));  // "Hi!!"
console.log(remove("!Hi"));  // "!Hi"
console.log(remove("!Hi!"));  // "!Hi"
console.log(remove("Hi! Hi!"));  // "Hi! Hi"
console.log(remove("Hi"));  // "Hi"