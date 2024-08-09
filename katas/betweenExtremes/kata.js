function betweenExtremes(numbers) {
  //write your code here
  return Math.max(...numbers) - Math.min(...numbers);
}

console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));
// 42
console.log(betweenExtremes([-1, -41, -77, -100]));
// 99
