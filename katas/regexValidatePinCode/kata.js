// #1
// function validatePIN(pin) {
//     if (/^(\d{4}|\d{6})$/.test(pin)) {
//         return true;
//     }
//     return false;
// }

// #2 
// function validatePIN(pin) {
//     return /^(\d{4}|\d{6})$/.test(pin)
// }

// #3
const validatePIN = pin => /^(\d{4}|\d{6})$/.test(pin);


console.log(validatePIN('1234'));
console.log(validatePIN('12345'));
console.log(validatePIN('a234'));
console.log(validatePIN('-12345'));
console.log(validatePIN('12.0'));