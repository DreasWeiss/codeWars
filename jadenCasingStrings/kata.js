String.prototype.toJadenCase = function () {
    return this.split(' ').map(i => `${i[0].toUpperCase()}${i.slice(1)}`).join(' ');
};

const str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase());