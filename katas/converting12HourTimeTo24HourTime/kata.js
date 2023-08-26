// #1
// function to24hourtime(hour, minute, period) {
//     // hour will always range from 1 to 12 (inclusive)
//     // minute will always range from 0 to 59 (inclusive)
//     // period will always be either "am" or "pm"

//     let h,m;
//     if(period === 'am') {
//         if (hour === 12) {
//             h = '00';
//         } else if (`${hour}`.length < 2) {
//             h = `0${hour}`
//         } else {h=`${hour}`}
//     } else {hour===12 ? h = '12' : h=`${hour+12}`}

//     m = `${minute}`.length < 2 ? `0${minute}` : minute;

//     return `${h}${m}`
// }

// #2
function to24hourtime(hour, minute, period) {
    if (period === "am" && hour === 12) {
        hour = 0;
    } else if (period === "pm" && hour !== 12) {
        hour += 12;
    }
    return hour.toString().padStart(2, "0") + minute.toString().padStart(2, "0");
}


console.log(to24hourtime(1, 0, "am"));
// "0100", "Input =  1:00 am"

console.log(to24hourtime(1, 0, "pm"));
// "1300", "Input =  1:00 pm"

console.log(to24hourtime(12, 0, "am"));
// "0000", "Input = 12:00 am"

console.log(to24hourtime(12, 0, "pm"));
// "1200", "Input = 12:00 pm"

console.log(to24hourtime(6, 30, "am"));
// "0630", "Input =  6:30 am"

console.log(to24hourtime(9, 45, "pm"));
// "2145", "Input =  9:45 pm"
