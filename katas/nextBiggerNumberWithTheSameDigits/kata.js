/*
function nextBigger(n) {
    const sortedDigits = n => ('' + n).split('').sort((a, b) => b - a)
    const max = +sortedDigits(n).join('')
    for (let i = n + 1; i <= max; i++) {
      if (max === +sortedDigits(i).join('')) return i
    }
    return -1
}

// => Execution Timed Out (12000 ms) :((((
*/

// #1
// function nextBigger(n){
//     let d = n.toString().split('');

//     let p = -1;
//     for (let i = d.length-1; i > 0; i--) {
//       if (+d[i] > +d[i-1]) {
//         p = i-1;
//         break;
//       }
//     }

//     if (p == -1) return p;

//     let right = d.splice(p);
//     let pv = right.splice(0, 1)[0];
//     let mm = null, mmi = null;
//     for (let i = 0; i < right.length; i++) {
//       if (right[i] > pv) {
//         if (mm == null || right[i] < mm) {
//           mm = right[i];
//           mmi = i;
//         }
//       }
//     }

//     if (mmi == null) return -1;

//     right.splice(mmi, 1);
//     right.push(pv);
//     right = right.sort();

//     let ret = +d.concat([mm]).concat(right).join('');
//     if (ret < n) return -1;

//     return ret;
//   }


// #2
function nextBigger(n) {
    if (n === reverseSortDigits(n)) return -1

    let nSorted = sortDigits(n)

    while (true) {
        n += 1
        if (sortDigits(n) === nSorted) return n
    }
}

function splitDigits(d) {
    return String(d).split('')
}

function sortDigits(d) {
    return Number(splitDigits(d).sort().join(''))
}

function reverseSortDigits(d) {
    return Number(splitDigits(d).sort().reverse().join(''))
}

console.log(nextBigger(12)); // 21
console.log(nextBigger(513)); // 531
console.log(nextBigger(2017)); // 2071
console.log(nextBigger(414)); // 441
console.log(nextBigger(144)); // 414