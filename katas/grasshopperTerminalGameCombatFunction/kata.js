// #1
// function combat(health, damage) {
//   // Write your code here
//   return health > damage ? health - damage : 0;
// }

// #2
const combat = (health, damage) => Math.max(0, health - damage);

console.log(combat(100, 5)); // 95
console.log(combat(92, 8)); // 84
console.log(combat(20, 30)); // 0, 'Health cannot go below 0'
