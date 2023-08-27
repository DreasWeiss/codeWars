function getCount(str) {
    return str.replace(/[^aeiou]/gi, '').length;
}


console.log(getCount("abracadabra"));// 5