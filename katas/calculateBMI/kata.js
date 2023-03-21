function bmi(weight, height) {
    let bmi = weight / Math.pow(height, 2);
    return bmi > 30 ? "Obese" : bmi <= 30 && bmi > 25 ? "Overweight" : bmi <= 25.0 && bmi > 18.5 ? "Normal" : "Underweight";
}


console.log(bmi(80, 1.80)); // "Normal"