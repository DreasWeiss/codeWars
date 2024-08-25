function grader(score) {
  return score > 1
    ? 'F'
    : score >= 0.9
    ? 'A'
    : score >= 0.8
    ? 'B'
    : score >= 0.7
    ? 'C'
    : score >= 0.6
    ? 'D'
    : 'F';
}

console.log(grader(0.7)); // 'C'
console.log(grader(0.9)); // 'A'
console.log(grader(0.6)); // 'D'
console.log(grader(1.6)); // 'D'
