function myLanguages(results) {
  return Object.keys(results)
    .filter((res) => results[res] >= 60)
    .sort((res1, res2) => results[res2] - results[res1]);
}

console.log(myLanguages({ Java: 10, Ruby: 80, Python: 65 }));
// ["Ruby", "Python"]

console.log(myLanguages({ Hindi: 60, Greek: 71, Dutch: 93 }));
// ["Dutch", "Greek", "Hindi"]

console.log(myLanguages({ 'C++': 50, ASM: 10, Haskell: 20 }));
// []
