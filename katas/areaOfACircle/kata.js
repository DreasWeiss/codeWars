// №1
// var circleArea = function (radius) {
//     return typeof(radius) === 'number' && radius > 0 ?
//     +(Math.PI * Math.pow(radius,2)).toFixed(2):
//     false;
// };


// №2
var circleArea = function (radius) {
    return radius > 0 && +(Math.PI * radius * radius).toFixed(2);
};


console.log(circleArea(-1485.86));    //returns false
console.log(circleArea(0));           //returns false
console.log(circleArea(43.2673));     //returns 5881.25
console.log(circleArea(68));          //returns 14526.72
console.log(circleArea("number"));    //returns false