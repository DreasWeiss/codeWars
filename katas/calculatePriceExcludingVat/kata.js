//return price without vat
function excludingVatPrice(price) {
    // your code
    return price != null ? +(price / 1.15).toFixed(2) : -1;
}


console.log(excludingVatPrice(230)); // 200.00
console.log(excludingVatPrice(123)); // 106.96