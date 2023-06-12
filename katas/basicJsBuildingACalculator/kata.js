var Calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return b !== 0 ? a / b : false
    }
};


console.log(Calculator.add(2, 4)); //6, '2+4=6'
console.log(Calculator.subtract(5, 3)); //2, '5-3=2'
console.log(Calculator.multiply(9, 2)); //18, '9x2=18'
console.log(Calculator.divide(12, 4)); //3, '12/4=3'
console.log(Calculator.divide(33, 0)); //false, 'Tried to divide by zero'