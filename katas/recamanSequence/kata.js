//How to calculate recaman sequence?
//Recamán's sequence {R(n),n ≥ 0} is defined by R(0) = 0 and, 
//for n ≥ 1, R(n) = R(n−1)−n if that number is positive and not 
//already in the sequence, and otherwise R(n) = R(n − 1) + n 
//(in the latter case repeated terms are permitted). 
//Terms R(0) through R(11) are 0,1,3,6,2,7,13,20,12,21,11,22.

// #1
// function recaman(n) {
//     if (n === 0) return 0;

//     let sequence = new Array(n + 1);
//     let seen = new Set();

//     sequence[0] = 0;
//     seen.add(0);

//     for (let i = 1; i <= n; i++) {
//         let prev = sequence[i - 1];
//         let candidate = prev - i;

//         if (candidate > 0 && !seen.has(candidate)) {
//             sequence[i] = candidate;
//         } else {
//             sequence[i] = prev + i;
//         }

//         seen.add(sequence[i]);
//     }

//     return sequence[n];
// }


// #2
function recaman(n) {
  const banned = new Set();
  let member = 0;
  for (let i = 0; i <= n; i++) {
    const diff = member - i;
    member = (diff < 0 || banned.has(diff)) ? member + i : diff;
    banned.add(member);
  }
  return member;
}


console.log(recaman(10));
//[0,1,3,6,2,7,13,20,12,21,11,22,10,23,9,24,8,25,43,62,42,63,41,18,42,17,43,16,44,15,45,14,46,79,113,78,114,77,39,78,38,79,37,80,36,81,35,82,34,83,33,84,32,85,31,86,30,87,29,88];
