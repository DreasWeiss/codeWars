"use strict";
// #1 
// export function evaluate(equation: string): number | null {
//     const result = equation
//       .split('@')
//       .map(Number)
//       .reduce((a, b) => (b === 0 ? NaN : a + b + (a - b) + a * b + ~~(a / b)));
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = evaluate;
//     return isFinite(result) ? result : null;
//   }
// #2
function evaluate(equation) {
    const args = equation.split(/\s*@\s*/).map(arg => Number(arg)).filter(arg => !Number.isNaN(arg));
    let result = BigInt(args[0]);
    for (const arg of args.splice(1)) {
        if (arg === 0)
            return null;
        const nextResult = BigInt(2 + arg) * result + result / BigInt(arg);
        result = nextResult;
    }
    return result;
}
console.log(evaluate('3 @ 2')); // = 13
console.log(evaluate('6 @ 9')); // = 66
console.log(evaluate('1 @ 1')); // = 66
