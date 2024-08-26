function isAlt(word) {
  // happy codinggg
  return word.match(/[aeiou]{2}|[^aeiou]{2}/gi) === null;
}

var res = isAlt('amazon');
console.log(res); // true
var res = isAlt('apple');
console.log(res); // false
var res = isAlt('banana');
console.log(res); // true
