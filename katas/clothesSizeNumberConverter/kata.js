// #1
// const sizes = {
//   xs: 34,
//   s: 36,
//   m: 38,
//   l: 40,
//   xl: 42,
// };

// function sizeToNumber(size) {
//   if (sizes.hasOwnProperty(size)) return sizes[size];
//   let re = new RegExp(/[x]+[s|l]/, "gi");
//   if (re.test(size)) {
//     let i = size[size.length - 1];
//     if (i == "s") {
//       return sizes[i] - (size.length - 1) * 2;
//     }
//     if (i == "l") {
//       return sizes[i] + (size.length - 1) * 2;
//     }
//   }
//   return null;
// }


// #2
function sizeToNumber(size) {
  if (size == "s") return 36;
  if (size == "m") return 38;
  if (size == "l") return 40;
  const x = size.match(/x/g)?.length;
  if (/^x+s$/.test(size)) return 36 - x * 2;
  if (/^x+l$/.test(size)) return 40 + x * 2;
  return null;
}


console.log(sizeToNumber("s")); // 36, "Small size"
console.log(sizeToNumber("m")); // 38, "Medium size"
console.log(sizeToNumber("l")); // 40, "Large size"
console.log(sizeToNumber("xl")); // 42, "Extra large"
console.log(sizeToNumber("xs")); // 34, "Extra small

console.log(sizeToNumber("xxxs")); // 30, "4-extra small"
console.log(sizeToNumber("xxxl")); // 46, "4-extra large"

// null
console.log(sizeToNumber("")); // "Blank string is invalid"
console.log(sizeToNumber("xm")); // "Cannot apply modifier for medium size (xm)"
console.log(sizeToNumber("xxxm")); // "Cannot apply modifier for medium size (xxxm)"
console.log(sizeToNumber("xxxx")); // "No base size provided (xxxx)"
console.log(sizeToNumber("ssss")); // "Only one base size is allowed ('ssss')"
console.log(sizeToNumber("hello world")); // "Any other text is invalid ('hello world')"
console.log(sizeToNumber("sm")); // "Cannot have two bases ('sm')"
console.log(sizeToNumber("ml")); // "Cannot have two bases ('ml')"
console.log(sizeToNumber("lm")); // "Cannot have two bases ('lm')"
