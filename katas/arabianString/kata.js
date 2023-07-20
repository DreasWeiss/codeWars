// #1
// function camelize(str) {
//     return  str.replace(/[^a-z0-9]/gi,' ')
//                 .split(' ')
//                 .map(l=>l.slice(0,1).toUpperCase()+l.slice(1).toLowerCase())
//                 .join('');
// }


// #2
function camelize(str) {
    return str.match(/[a-z0-9]+/gi).map(function (s) {
        return s[0].toUpperCase() + s.substr(1).toLowerCase()
    }).join('')
}


console.log(camelize("java script")); //"JavaScript");
console.log(camelize("cODE warS")); //"CodeWars");
console.log(camelize("your-NaMe-here"));
console.log(camelize("YCuk:dsWhY V,3 d/E4 X6/LZJDAiwIG9YI5ReRKz"));
console.log(camelize("jtgVoMS6;3vS;VuIMu7?k;s;qLp5LLYVPzY h,n/ 79 ?S7MQ"));