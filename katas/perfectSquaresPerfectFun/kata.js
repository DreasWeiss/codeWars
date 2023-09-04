function squareIt(int) {
    const intStr = int.toString();
    const n = Math.sqrt(intStr.length);
    return Number.isInteger(n) ?
        intStr.replace(new RegExp(`(.{${n}})(?!$)`, "g"), "$1\n") :
        "Not a perfect square!";
}


console.log(squareIt(1));
// "1"

console.log(squareIt(222));
// "Not a perfect square!"

console.log(squareIt(234562342342));
// "Not a perfect square!"

console.log(squareIt(88989));
// "Not a perfect square!"

console.log(squareIt(112141568));
// "112\n141\n568"
