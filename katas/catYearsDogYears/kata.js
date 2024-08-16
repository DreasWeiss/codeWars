var humanYearsCatYearsDogYears = function (humanYears) {
  // Your code here!
  let catYears = 15;
  let dogYears = 15;

  if (humanYears >= 2) {
    catYears += 9;
    dogYears += 9;
    if (humanYears > 2) {
      catYears += (humanYears - 2) * 4;
      dogYears += (humanYears - 2) * 5;
    }
  }

  return [humanYears, catYears, dogYears];
};

console.log(humanYearsCatYearsDogYears(1));
// [1,15,15]

console.log(humanYearsCatYearsDogYears(2));
// [2,24,24]

console.log(humanYearsCatYearsDogYears(10));
// [10,56,64]
