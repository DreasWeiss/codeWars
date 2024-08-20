function howMuchILoveYou(nbPetals) {
  // your code
  let l = [
    'not at all',
    'I love you',
    'a little',
    'a lot',
    'passionately',
    'madly',
  ];

  return l[nbPetals % 6];
}

console.log(howMuchILoveYou(128)); // 'a little'
console.log(howMuchILoveYou(7)); // 'I love you'
console.log(howMuchILoveYou(8)); // 'a little'
console.log(howMuchILoveYou(3)); // 'a lot'
console.log(howMuchILoveYou(6)); // 'not at all'
