// 1. isLeapYear(year) divisible by 4, except centuries, unless divisible by 400.
//2024 = true, 1900 i= false, 2000 =true.
//pseudocode
// If the year divides evenly by 400, it is a leap year.
// Otherwise, if it divides evenly by 100, it is not.
// Otherwise, if it divides evenly by 4, it is.
// In all other cases, it is not
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2024));
console.log(isLeapYear(1900));
console.log(isLeapYear(2000));
console.log(isLeapYear(2023));

//getBMICategory(weightKg, heightM) compute BMI and return "Underweight" (< 18.5),
//"Normal" (< 25), "Overweight" (< 30) or "Obese". Guard against height ≤ 0
// Pseudocode:
// If height is 0 or less, return "Invalid height".
// Calculate BMI: weight divided by height squared.
// If BMI is below 18.5, return "Underweight".
// If BMI is below 25, return "Normal".
// If BMI is below 30, return "Overweight".
// Otherwise, return "Obese".

function getBMICategory(weightKg, heightM) {
  if (heightM <= 0) {
    return "Invalid height";
  }

  const bmi = weightKg / (heightM * heightM);

  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(getBMICategory(50, 1.7)); // Underweight
console.log(getBMICategory(68, 1.7)); // Normal
console.log(getBMICategory(90, 1.7)); // Obese
console.log(getBMICategory(70, 0));   // Invalid height (edge case)
