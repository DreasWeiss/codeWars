// #1
// function well(x){
//     let a = {};
//     for (let i = 0; i < x.length; i++) {
//         if(a[x[i]] == undefined){
//             a[x[i]]=0
//         } 
//         a[x[i]]++;
//     }
//     return a['good'] == undefined ? 
//                 'Fail!' : a['good'] > 2 ? 
//                 'I smell a series!' : 'Publish!' ;
// }


// #2
const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
}
    
console.log(well(['bad', 'bad', 'bad'])); 
// 'Fail!'

console.log(well(['good', 'bad', 'bad', 'bad', 'bad'])); 
// 'Publish!'

console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good'])); 
// 'I smell a series!'