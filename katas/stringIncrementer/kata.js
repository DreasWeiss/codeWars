function incrementString(strng) {
    const regex = /\d+$/gi;
    const numStrng = strng.match(regex);
    const num = (+ numStrng + 1).toString();
    if (numStrng === null) {
        return `${strng}${1}`;
    }

    if (num.length === numStrng[0].length) {
        return strng.replace(regex, num);
    } else {
        if (num.length > numStrng[0].length) {
            return strng.replace(regex, num);
        } else {
            return strng.slice(0, -num.length) + num;
        }
    }
}

// best solution from code wars (imho)
// const incrementString = s => s.replace(/[0-8]?9*$/, m => ++m);

console.log(incrementString("foobar000")); // "foobar001"
console.log(incrementString("foobar999")); // "foobar1000"
console.log(incrementString("foobar00999")); // "foobar01000"
console.log(incrementString("foo")); // "foo1"
console.log(incrementString("foobar001")); // "foobar002"
console.log(incrementString("foobar1")); // "foobar2"
console.log(incrementString("1"));  // "2"
console.log(incrementString("009")); // "010"
console.log(incrementString("fo99obar99")); // "fo99obar100"