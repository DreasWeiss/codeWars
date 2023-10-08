function amIWilson(p) {
    // check if prime is Wilson
    // const f = (n) => n < 0 ? -1 : n === 0 ? 1 : n * f(n-1);
    // return (f(p-1) + 1) % (p * p) == 0

    // return (Array.from({length: p-1},(_, index)=>index+1)
    //             .reduce((prev, curr) => prev*curr,1)+1)/(p*p)%1 == 0

    p = BigInt(p);
    const fac = n => n ? n * fac(n - 1n) : 1n;
    const d = (fac(p - 1n) + 1n);
    return !(d % (p * p));
}

console.log(amIWilson(5));// true
console.log(amIWilson(9));// false
console.log(amIWilson(6));// false
console.log(amIWilson(563));// true