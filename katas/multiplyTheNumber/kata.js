function multiply(number) {
    //your code here
    return number * 5 ** (number < 0 ? number.toString().length - 1 : number.toString().length)
}


console.log(multiply(10)) //250
console.log(multiply(5)) //25
console.log(multiply(200)) //25000
console.log(multiply(0)) //0
console.log(multiply(-2)) //-10
console.log(multiply(-3)) //-15