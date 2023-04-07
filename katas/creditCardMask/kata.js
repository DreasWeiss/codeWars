// return masked string
function maskify(cc) {
    return `${[...cc.slice(0, -4)].map(i => i = '#').join('')}${[...cc.slice(-4)].join('')}`
}



console.log(maskify('4556364607935616'));
// '############5616'

console.log(maskify('1'));
// '1'

console.log(maskify('11111'));
// '#1111'