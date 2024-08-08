function doubleEveryOther(a) {
  return a.map((i, idx) => (idx % 2 == 1 ? i * 2 : i));
}

console.log(doubleEveryOther([1, 2, 3, 4])); // [1, 4, 3, 8]
