function toCamelCase(str) {
    return str.split(/[/_|/-]/g)
        .map((i, idx) => idx === 0 ? i : i.slice(0, 1).toUpperCase() + i.slice(1))
        .join('');
}


console.log(toCamelCase(''));
// '', "An empty string was provided but not returned")

console.log(toCamelCase("the_stealth_warrior"));
// "theStealthWarrior", "toCamelCase('the_stealth_warrior') did not return correct value")

console.log(toCamelCase("The-Stealth-Warrior"));
// "TheStealthWarrior", "toCamelCase('The-Stealth-Warrior') did not return correct value")

console.log(toCamelCase("A-B-C"));
// "ABC", "toCamelCase('A-B-C') did not return correct value")