function getMissingElement(superImportantArray) {
  //TODO
  return Array(10)
    .fill()
    .map((_, i) => i)
    .filter((i) => !superImportantArray.includes(i))[0];
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3
