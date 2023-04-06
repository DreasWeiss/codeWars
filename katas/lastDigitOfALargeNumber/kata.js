var lastDigit = function (str1, str2) {

    let first;
    let second;

    if (str1.length > 3) {
        first = +str1.slice(-3);
    } else {
        first = +str1
    }

    if (str2.length > 3) {
        let sec = +str2.slice(-3);
        if (sec === 0) {
            second = 10;
        } else {
            second = sec;
        }
    } else {
        second = +str2
    }
    if (+str2 === 0) return 1;
    if (+str1 === 0 && +str2 === 0) return 1;
    if (second === 0) return 0;

    let pow = BigInt(BigInt(first) ** BigInt(second)).toString();


    return +pow.slice(-1);
}


console.log(lastDigit("4", "1"));
// 4


console.log(lastDigit("4", "2"));
// 6


console.log(lastDigit("9", "7"));
// 9


console.log(lastDigit("10", "10000000000"));
// 0


console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376", "2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"));
// 6


console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"));
// 7

