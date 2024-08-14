// #1
// function whatCentury(year)
// {
//     let a = ['th', 'st', 'nd', 'rd'];
//     let b = parseInt(year.slice(0,2));
//     let c = parseInt(year.slice(2,4));
//     let cent = c === 0 ? b : b+1;
//     if (cent <= 20) return `${cent}${a[0]}`
//     if (cent%10 == 1) return `${cent}${a[1]}`
//     if (cent%10 == 2) return `${cent}${a[2]}`
//     if (cent%10 == 3) return `${cent}${a[3]}`
//     if (cent > 20) return `${cent}${a[0]}`
// }

// #2
// function whatCentury(year) {
//   var cent = Math.ceil(year / 100);
//   if (cent > 10 && cent < 20) return cent + "th";
//   switch (cent % 10) {
//     case 1: return cent + "st";
//     case 2: return cent + "nd";
//     case 3: return cent + "rd";
//     default: return cent + "th";
//   }
// }

// #3
function whatCentury(year) {
  let cent = Math.ceil(year / 100);
  return (
    cent + (cent < 20 ? 'th' : ['th', 'st', 'nd', 'rd'][cent % 10] || 'th')
  );
}

console.log(whatCentury('3333'));
// '34th'

console.log(whatCentury('1999'));
// "20th", "With input '1999' solution produced wrong output");

console.log(whatCentury('2011'));
// "21st", "With input '2011' solution produced wrong output");

console.log(whatCentury('2154'));
// "22nd", "With input '2154' solution produced wrong output");

console.log(whatCentury('2259'));
// "23rd", "With input '2259' solution produced wrong output");

console.log(whatCentury('1234'));
// "13th", "With input '1234' solution produced wrong output");

console.log(whatCentury('1023'));
// "11th", "With input '1023' solution produced wrong output");

console.log(whatCentury('2000'));
// "20th", "With input '2000' solution produced wrong output");
