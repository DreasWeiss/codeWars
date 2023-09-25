const STRANGE_STRING = "ß";
const upDownLen = STRANGE_STRING.toUpperCase().toLowerCase().length;
const oriLen = STRANGE_STRING.length;

const a = () => {
    return oriLen !== upDownLen;
}

console.log(upDownLen);
console.log(oriLen);
console.log(a());