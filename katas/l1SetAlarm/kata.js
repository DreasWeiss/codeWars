// # 1
// function setAlarm(employed, vacation) {
//     if (employed === true && vacation === false) {
//         return true;
//     } else {
//         return false;
//     }
// }


// # 2
function setAlarm(employed, vacation) {
    return employed === true && vacation === false ? true : false;
}

console.log(setAlarm(true, true)); //,  false,"Should be false.");
console.log(setAlarm(true, false)); //, true,"Should be true.");
console.log(setAlarm(false, true)); //,  false, "Should be false.");
