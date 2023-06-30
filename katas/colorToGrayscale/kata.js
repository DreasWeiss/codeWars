// #1
// function rgbToGrayscale(color) {
//     let c = color.replace("#", '');
//     let a = [];
//     for (let i =0; i<c.length; i+=2){
//         a.push(parseInt([c[i],c[i+1]].join(''), 16))
//     }
//     let r = 0.299 * a[0];
//     let g = 0.587 * a[1];
//     let b = 0.114*a[2];
//     let y = Math.round(r+b+g).toString(16).padStart(2,'0')
//     return `#${y.repeat(3)}`;
// }


// #2
// function rgbToGrayscale(color){ 

//     let [r,g,b] = color.match(/\w{2}/g);

//     r  = parseInt(r,16) * 0.299;
//     g  = parseInt(g,16) * 0.587;
//     b  = parseInt(b,16) * 0.114;

//     return '#' + Math.round(r+g+b).toString(16).padStart(2,'0').repeat(3);
//   }


// #3
function rgbToGrayscale(c) {
    let Y = Math.round(parseInt(c.substr(1, 2), 16) * 0.299 + parseInt(c.substr(3, 2), 16) * 0.587 + parseInt(c.substr(5, 2), 16) * 0.114).toString(16).padStart(2, "0");
    return `#${Y.repeat(3).toUpperCase()}`;
}



console.log(rgbToGrayscale("#FFFFFF").toUpperCase());
// '#FFFFFF'

console.log(rgbToGrayscale("#0000FF").toUpperCase());
// '#1D1D1D'

console.log(rgbToGrayscale("#00FF00").toUpperCase());
// '#969696' 

console.log(rgbToGrayscale("#FF0000").toUpperCase());
// '#4C4C4C'

console.log(rgbToGrayscale("#000000").toUpperCase());
// '#000000', "Make sure your solution does zero padding!"
