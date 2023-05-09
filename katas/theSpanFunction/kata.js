function span(arr, predicate) {
    let a = [[], []];
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i])) {
            arr.slice(i).forEach(element => {
                a[1].push(element);
            });;
            break;
        } else {
            a[0].push(arr[i]);
        }
    }
    return a;
}


// Functions for use in tests
function isEven(x) {
    return Math.abs(x) % 2 === 0;
}

function isOdd(x) {
    return Math.abs(x) % 2 !== 0;
}

// Arrays for use in tests
var arr1 = [2, 4, 6, 1, 4, 8];
var arr2 = [1, 4, 5, 7, 6];
var arr3 = [13, 17, 19, 11, 21];


function tr() { return true; }


console.log(span(arr1, isEven)); // [[2,4,6],[1,4,8]]

console.log(span(arr2, isEven)); // [[], arr2]

console.log(span(arr3, isOdd)); // [arr3,[]]
