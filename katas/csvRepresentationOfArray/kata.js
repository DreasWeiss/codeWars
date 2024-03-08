// #1
// function toCsvText(array) {
//     // good luck
//     let ar = [];
//     array.map(i=>ar.push(i.join(',')))
//      return ar.join('\n');
// }

// #2
// const toCsvText = array => array.map(i=>i.join(',')).join('\n');

// #3
const toCsvText = ar => ar.join('\n');


console.log(toCsvText([
    [ 0, 1, 2, 3, 45 ],
    [ 10,11,12,13,14 ],
    [ 20,21,22,23,24 ],
    [ 30,31,32,33,34 ]
   ] ))
   // '0,1,2,3,45\n10,11,12,13,14\n20,21,22,23,24\n30,31,32,33,34');

console.log(toCsvText([
    [ -25, 21, 2, -33, 48 ],
    [ 30,31,-32,33,-34 ]
   ])) 
   // '-25,21,2,-33,48\n30,31,-32,33,-34'