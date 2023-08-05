// #1
// function checkLogs(log) {
//     // return the mininum number of days
//     let days = 1;
//     log.map((i, idx)=>{
//         if(i >= log[idx+1]) {
//             days++
//         }
//     })
//     return log.length !== 0 ?days:0;
// }


// #2
const checkLogs = log =>
    log.filter((num, idx, arr) => !(num > arr[idx - 1])).length;


console.log(checkLogs(["12:12:12"])); // 1);
console.log(checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"])); // 1);
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"])); // 2);
console.log(checkLogs(["12:00:00", "12:00:00", "00:00:00"])); // 3);