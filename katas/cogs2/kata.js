// #1
function cogRpm(cogs, n) {
    var arrayLength = cogs.length;
    var leftRPM = cogs[n]/cogs[0];
    var rightRPM = cogs[n]/cogs[arrayLength-1];
    if (n % 2 == 1){leftRPM *= -1;}
    if ((arrayLength-n) % 2 == 0){rightRPM *= -1;}
    return [leftRPM, rightRPM]
  }
 

// #2
// function cogRpm(cogs, n) {
//     // Your code here!
//     let d = [1,-1];
//     return [d[n%2]*cogs[n]/cogs[0], d[(cogs.length - n +1)%2]*cogs[n]/cogs[cogs.length-1]];
// }
 

// test
var expected = [-1/2, -2];
var actual = cogRpm([100, 50, 25], 1);
console.log(actual.length) // 2
console.log(actual[0]); // expected[0], "Left RPM");
console.log(actual[1]); // expected[1], "Right RPM");