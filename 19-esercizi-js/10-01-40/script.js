let height = Number(prompt("insert your height in inches: "));
let weight = Number(prompt("insert your weight in pounds: "));

let cm = height * 2.54;
let kg = weight / 2.2046;

console.log("Height: " + cm);
console.log("Weight: " + kg);

let bmi = kg / Math.sqrt(cm / 100);

console.log("BMI: " + bmi);

