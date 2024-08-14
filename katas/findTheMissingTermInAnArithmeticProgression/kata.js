var findMissing = function (l) {
  return (
    ((l[0] + l[l.length - 1]) * (l.length + 1)) / 2 - l.reduce((a, b) => a + b)
  );
};

console.log(findMissing([1, 3, 4])); // 2
console.log(findMissing([1, 3, 5, 9, 11])); // 7
