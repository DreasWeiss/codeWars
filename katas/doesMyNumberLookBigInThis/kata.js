function narcissistic(value) {
    let valueArr = value.toString().split('');
    let count = valueArr.map(i => Math.pow(+i, valueArr.length)).reduce((acc, i) => acc + i, 0);

    return count === value;
}


console.log(narcissistic(7)); //true
console.log(narcissistic(153)); //true
console.log(narcissistic(122)); //false
console.log(narcissistic(487)); //false