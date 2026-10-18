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


//motoFare(km) moto taxi fare: 300 RWF base for the first 2 km, then 107 RWF per extra
//km (round up partial km with Math.ceil). Return 0 for km ≤ 0.
//pseudocode:
// If km is 0 or less, return 0.
// If km is 2 or less, return the base fare of 300 RWF.
// Otherwise, subtract 2 from km to get the extra distance.
// Round the extra distance up to a whole kilometer.
// Return 300 plus 107 RWF for each extra kilometer.

function motoFare(km) {
  if (km <= 0) {
    return 0;
  } else if (km <= 2) {
    return 300;
  } else {
    const extraKm = Math.ceil(km - 2);
    return 300 + extraKm * 107;
  }
}

console.log(motoFare(2));   // 300
console.log(motoFare(2.1)); // 407
console.log(motoFare(5));   // 621
console.log(motoFare(0));   // 0 (edge case)

//convertSeconds(total) return a string like &quot;2h 05m 09s&quot; (minutes and seconds always
//two digits hint: padStart).
//Pseudocode:
// Find whole hours by dividing total seconds by 3600.
// Find leftover minutes, then leftover seconds.
// Pad minutes and seconds to two digits.
// Return them as "Xh YYm ZZs".

function convertSeconds(total) {
  const hours = Math.floor(total / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return `${hours}h ${paddedMinutes}m ${paddedSeconds}s`;
}

console.log(convertSeconds(7509)); // "2h 05m 09s"
console.log(convertSeconds(65));   // "0h 01m 05s"
console.log(convertSeconds(0));    // "0h 00m 00s" (edge case)

//changeMaker(amount) using Rwandan notes/coins [5000, 2000, 1000, 500, 100, 50,
//20, 10, 5, 1], print how many of each are needed for the smallest number of pieces.
//7385 → 1×5000, 1×2000, 3×100, 1×50, 1×20, 1×10, 1×5.
//// Pseudocode:
// List the denominations from largest to smallest.
// Set the remaining amount to the given amount.
// For each denomination, divide the remaining amount by it to find how many are needed.
// Print the denomination and count if the count is greater than zero.
// Subtract that value from the remaining amount.

function changeMaker(amount) {
  const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
  let remaining = amount;

  for (let i = 0; i < denominations.length; i++) {
    const denomination = denominations[i];
    const count = Math.floor(remaining / denomination);

    if (count > 0) {
      console.log(`${count}*${denomination}`);
      remaining = remaining % denomination;
    }
  }
}

changeMaker(7385); // 1×5000, 1×2000, 3×100, 1×50, 1×20, 1×10, 1×5
changeMaker(56);   // 1×50, 1×5, 1×1
changeMaker(0);    // prints nothing (edge case)