var Ball = function (ballType) {
    return ballType ? this.ballType = ballType : this.ballType = 'regular';
};

console.log(new Ball().ballType); // "regular"
console.log(new Ball("super").ballType); // "super"