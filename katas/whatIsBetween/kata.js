function between(a, b) {
  // your code here
  return Array.from({ length: b - a + 1 }, (_, i) => i + a);
}

console.log(between(1, 4)); // [1, 2, 3, 4]
console.log(between(-2, 2)); // [-2, -1, 0, 1, 2]
