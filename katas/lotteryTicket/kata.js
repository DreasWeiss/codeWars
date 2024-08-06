// #1
// function bingo(ticket, win){
//     let counter = 0;
//     for(let i = 0; i < ticket.length; i++) {
//         let t = ticket[i][0]
//         for (let k = 0; k < t.length; k++) {
//            let s = t.charCodeAt(k);
//            if (s == ticket[i][1]) {
//             counter++;
//             break;
//            }
//         }
//     }
//     return counter>=win ? 'Winner!': 'Loser!';
// }

// #2
// function bingo(ticket, win){
//   if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
//   {
//     return "Winner!";
//   }
//   return "Loser!";
// }

// #3
function bingo(t, w) {
  return t.filter((a) => [...a[0]].some((b) => b.charCodeAt(0) == a[1]))
    .length >= w
    ? 'Winner!'
    : 'Loser!';
}


console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    2
  )
);
//'Loser!'
console.log(
  bingo(
    [
      ['ABC', 65],
      ['HGR', 74],
      ['BYHT', 74],
    ],
    1
  )
);
//'Winner!'
console.log(
  bingo(
    [
      ['HGTYRE', 74],
      ['BE', 66],
      ['JKTY', 74],
    ],
    3
  )
);
//'Loser!'
console.log(
  bingo(
    [
      ['OGEUHG', 87],
      ['PDDUM', 80],
      ['BEGW', 67],
      ['MGLU', 65],
      ['EPKFBSCA', 69],
    ],
    1
  )
);
//'Winner!'
