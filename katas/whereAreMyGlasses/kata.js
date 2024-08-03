// #1
// function findGlasses(arr) {
//   // Good luck!
//   let regex = new RegExp(/O-+O/, 'g');
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].match(regex)) return i;
//   }
// }


// #2
function findGlasses(a) {
  return a.findIndex((e) => /O-+O/.test(e));
}

console.log(findGlasses(['phone', 'O-O', 'coins', 'keys'])); // 1
console.log(findGlasses(['OO', 'wallet', 'O##O', 'O----O'])); // 3
console.log(findGlasses(['O_O', 'O-O', 'OwO'])); // 1
console.log(findGlasses(['O--#--O', 'dustO---Odust', 'more dust'])); // 1
console.log(
  findGlasses([
    'floor',
    'the floor again',
    'pockets',
    'bed',
    'cabinet',
    'the top of my head O-O',
  ])
); //5
console.log(findGlasses(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O'])); // 3
