let p = [];

function handOutGift(name) {
  if(p.indexOf(name) !== -1) throw new Error();
  else p.push(name);
}