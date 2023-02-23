function getGrade(s1, s2, s3) {
    let average = (s1 + s2 + s3) / 3;

    if (average >= 90) {
        return 'A';
    } else if (average >= 80) {
        return 'B';
    } else if (average >= 70) {
        return 'C';
    } else if (average >= 60) {
        return 'D';
    } else {
        return 'F'
    }
}


console.log(getGrade(95, 90, 93));   // 'A')
console.log(getGrade(100, 85, 96));   //, 'A')
console.log(getGrade(92, 93, 94));  // 'A')
console.log(getGrade(70, 70, 100));   //, 'B')
console.log(getGrade(82, 85, 87));  // 'B')
console.log(getGrade(84, 79, 85));   // 'B')
console.log(getGrade(89, 89, 90));   // 'B') 
console.log(getGrade(70, 70, 70));   // 'C')
console.log(getGrade(75, 70, 79));   // 'C')
console.log(getGrade(60, 82, 76));   // 'C')
console.log(getGrade(65, 70, 59));   // 'D')
console.log(getGrade(66, 62, 68));   // 'D')
console.log(getGrade(58, 62, 70));   // 'D')
console.log(getGrade(44, 55, 52));   // 'F')
console.log(getGrade(48, 55, 52));   // 'F')
console.log(getGrade(58, 59, 60));   // 'F')