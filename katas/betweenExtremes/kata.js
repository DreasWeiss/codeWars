function whatday(num) {
  // put your code here
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const wrong = 'Wrong, please enter a number between 1 and 7';

  return num <= 7 && num > 0 ? days[num - 1] : wrong;
}

console.log(whatday(1)); // 'Sunday');
console.log(whatday(2)); // 'Monday');
console.log(whatday(3)); // 'Tuesday');
console.log(whatday(6)); // 'Friday');
console.log(whatday(8)); //'Wrong, please enter a number between 1 and 7'
console.log(whatday(20)); //'Wrong, please enter a number between 1 and 7'
