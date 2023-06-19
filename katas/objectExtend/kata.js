// #1 pass 18/20
// var extend = function (...args) {
//     return Object.assign({},...Array.from(args).reverse());
// }

// #2
var extend = function () {
    var combined = {};
    Array.prototype.slice.call(arguments).filter(isObject).reduceRight(function (i, obj) {
        Object.keys(obj).forEach(function (k) { combined[k] = obj[k] })
    }, null);
    return combined;
}


console.log(extend({ a: 1, b: 2 }, { c: 3 }));
// should === {a: 1, b: 2, c: 3}

console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }));
// should === {a: 1, b: 2, c: 3, d: 4}

console.log(extend({ a: 1, b: 2 }, { a: 3, c: 3 }));
// should  === {a: 1, b: 2, c: 3}

console.log(extend({ a: false, b: null }, { a: true, b: 2, c: 3 }));
 // should  === {a: false, b: null, c: 3}
