function compress(music) {
  let result = [];
  let i = 0;

  while (i < music.length) {
    let start = i;
    while (i + 1 < music.length && music[i + 1] === music[start]) {
      i++;
    }
    if (i > start) {
      result.push(`${music[start]}*${i - start + 1}`);
      i++;
      continue;
    }
    let step = music[i + 1] - music[i];
    if (i + 2 < music.length && music[i + 2] - music[i + 1] === step) {
      let j = i + 2;
      while (j + 1 < music.length && music[j + 1] - music[j] === step) {
        j++;
      }
      if (step === 1 || step === -1) {
        result.push(`${music[i]}-${music[j]}`);
      } else {
        result.push(`${music[i]}-${music[j]}/${Math.abs(step)}`);
      }
      i = j + 1;
      continue;
    }
    result.push(`${music[i]}`);
    i++;
  }
  return result.join(',');
}

console.log(compress([1, 2, 2, 3]));
//'1,2*2,3'

console.log(compress([1, 3, 4, 5, 7]));
//'1,3-5,7'

console.log(compress([1, 5, 4, 3, 7]));
//'1,5-3,7'

console.log(compress([1, 10, 8, 6, 7]));
//'1,10-6/2,7'
