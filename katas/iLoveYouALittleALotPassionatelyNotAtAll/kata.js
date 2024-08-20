// #1
// function howMuchILoveYou(nbPetals) {
//   // your code
//   let l = [
//     'not at all',
//     'I love you',
//     'a little',
//     'a lot',
//     'passionately',
//     'madly',
//   ];

//   return l[nbPetals % 6];
// }


// #2
function howMuchILoveYou(nbPetals) {
  switch ((nbPetals - 1) % 6) {
    case 1:
      return 'a little';
    case 2:
      return 'a lot';
    case 3:
      return 'passionately';
    case 4:
      return 'madly';
    case 5:
      return 'not at all';
    default:
      return 'I love you';
  }
}

console.log(howMuchILoveYou(128)); // 'a little'
console.log(howMuchILoveYou(7)); // 'I love you'
console.log(howMuchILoveYou(8)); // 'a little'
console.log(howMuchILoveYou(3)); // 'a lot'
console.log(howMuchILoveYou(6)); // 'not at all'
