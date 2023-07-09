const areaOrPerimeter = function (l, w) {
    return l === w ? l * w : (l + w) * 2;
};


console.log(areaOrPerimeter(3, 3)); //  9
console.log(areaOrPerimeter(6, 10)); // 32