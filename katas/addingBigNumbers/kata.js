// function add(a, b) {
//     return (BigInt(a) + BigInt(b)).toString(); // Fix me!
// }
// BigInt is not defined :((((

function add(a, b) {
    var result = ''
    var carry = 0
    a = a.split('')
    b = b.split('')
    while (a.length || b.length || carry) {
        carry += ~~a.pop() + ~~b.pop()
        result = carry % 10 + result
        carry = carry > 9
    }
    return result
} ``

console.log(add("1", "1")); // "2");
console.log(add("123", "456")); // "579");
console.log(add("888", "222")); // "1110");
console.log(add("1372", "69")); // "1441");
console.log(add("12", "456")); // "468");
console.log(add("101", "100")); // "201");
console.log(add('63829983432984289347293874', '90938498237058927340892374089')); // "91002328220491911630239667963")