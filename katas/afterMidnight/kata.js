// #1
// function dayAndTime(n) {
//     //enter your code here
//     let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     let mod = m => ((n%m)+m)%m;
//     let pad = m => ('0'+m).slice(-2);

//     return `${days[mod(10080)/1440 | 0]} ${pad(mod(1440)/60|0)}:${pad(mod(60) |0)}`
// }


// #2
const dayAndTime = n =>
    new Date(new Date(1970, 0, 4).setMinutes(n)).toLocaleDateString('en-US', { weekday: `long`, hour12: false, hour: `2-digit`, minute: `2-digit` })
        .replace('24:', '00:');


console.log(dayAndTime(0));
//'Sunday 00:00'

console.log(dayAndTime(-3));
//'Saturday 23:57'

console.log(dayAndTime(45));
//'Sunday 00:45'

console.log(dayAndTime(759));
//'Sunday 12:39'

console.log(dayAndTime(1236));
//'Sunday 20:36'

console.log(dayAndTime(1447));
//'Monday 00:07'

console.log(dayAndTime(7832));
//'Friday 10:32'

console.log(dayAndTime(18876));
//'Saturday 02:36'

console.log(dayAndTime(259180));
//'Thursday 23:40'

console.log(dayAndTime(-349000));
//'Tuesday 15:20'
