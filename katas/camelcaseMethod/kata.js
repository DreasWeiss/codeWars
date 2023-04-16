String.prototype.camelCase = function () {
    return this.toString()
        .toLowerCase()
        .trim()
        .split(' ')
        .map(i => `${i.slice(0, 1).toUpperCase()}${i.slice(1)}`)
        .join('');
}



console.log("test case".camelCase()); // "TestCase"
console.log("camel Case method".camelCase()); // "CamelCaseMethod"
console.log("say hello".camelCase()); // "SayHello"
console.log("camel case word".camelCase()); // "CamelCaseWord"
console.log("".camelCase()); // ""