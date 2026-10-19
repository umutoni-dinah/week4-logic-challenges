//validatePassword(pw) return an object { valid: boolean, errors: [] }, checking: at least 8
//characters, one uppercase, one lowercase, one digit, one special character from
//!@#$%^&amp;*, no spaces. Each failed rule adds a readable message to errors.
// Pseudocode:
// Create an empty list of errors and set all rule checks to false.
// Loop through each password character.
// Mark uppercase, lowercase, digit, special character, and space checks.
// Add an error for each rule that failed.
// Return whether the errors list is empty, along with the errors.

function validatePassword(pw) {
  const errors = [];
  let hasUppercase = false;
  let hasLowercase = false;
  let hasDigit = false;
  let hasSpecial = false;
  let hasSpace = false;
  const specialCharacters = "!@#$%^&*";

  for (let i = 0; i < pw.length; i++) {
    const character = pw[i];

    if (character >= "A" && character <= "Z") hasUppercase = true;
    if (character >= "a" && character <= "z") hasLowercase = true;
    if (character >= "0" && character <= "9") hasDigit = true;
    if (character === " ") hasSpace = true;

    for (let j = 0; j < specialCharacters.length; j++) {
      if (character === specialCharacters[j]) hasSpecial = true;
    }
  }

  if (pw.length < 8) errors[errors.length] = "Password must be at least 8 characters.";
  if (!hasUppercase) errors[errors.length] = "Password needs an uppercase letter.";
  if (!hasLowercase) errors[errors.length] = "Password needs a lowercase letter.";
  if (!hasDigit) errors[errors.length] = "Password needs a digit.";
  if (!hasSpecial) errors[errors.length] = "Password needs one of !@#$%^&*.";
  if (hasSpace) errors[errors.length] = "Password must not contain spaces.";

  return {
    valid: errors.length === 0,
    errors: errors
  };
}

console.log(validatePassword("Hello123!")); // valid
console.log(validatePassword("short"));     // several errors
console.log(validatePassword("Good Pass1!")); // space error

//romanNumeral(n) convert 1–3999 to Roman numerals. 1994 → "MCMXCIV".
// Pseudocode:
// If n is outside 1–3999, return "Invalid".
// List Roman values and their matching symbols from largest to smallest.
// For each value, while it fits into n:
//   Add its symbol to the result.
//   Subtract its value from n.
// Return the result.

function romanNumeral(n) {
  if (n < 1 || n > 3999) {
    return "Invalid";
  }

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  let result = "";

  for (let i = 0; i < values.length; i++) {
    while (n >= values[i]) {
      result += symbols[i];
      n -= values[i];
    }
  }

  return result;
}

console.log(romanNumeral(1994)); // "MCMXCIV"
console.log(romanNumeral(58));   // "LVIII"
console.log(romanNumeral(3999)); // "MMMCMXCIX"
console.log(romanNumeral(0));    // "Invalid" (edge case)

//nationalIdCheck(id) a simplified Rwandan ID format check: 16 digits, first digit 1, digits
//2–5 form a birth year between 1900 and the current year, 6th digit is 7 or 8. Return true
//or a message explaining the first problem found. (This is a simplified exercise not an
//official validation rule.)
// Pseudocode:
// Check that the ID has exactly 16 characters.
// Loop through it to make sure every character is a digit.
// Check that the first digit is 1.
// Read digits 2–5 as the birth year and check the valid year range.
// Check that the sixth digit is 7 or 8.
// Return true if all checks pass; otherwise return the first error message.

function nationalIdCheck(id) {
  if (id.length !== 16) {
    return "ID must be exactly 16 digits long.";
  }

  for (let i = 0; i < id.length; i++) {
    if (id[i] < "0" || id[i] > "9") {
      return "ID must contain digits only.";
    }
  }

  if (id[0] !== "1") {
    return "ID must start with 1.";
  }

  const birthYear = Number(id[1] + id[2] + id[3] + id[4]);
  const currentYear = new Date().getFullYear();

  if (birthYear < 1900 || birthYear > currentYear) {
    return `Birth year must be between 1900 and ${currentYear}.`;
  }

  if (id[5] !== "7" && id[5] !== "8") {
    return "The sixth digit must be 7 or 8.";
  }

  return true;
}

console.log(nationalIdCheck("1199971234567890")); // true
console.log(nationalIdCheck("2199971234567890")); // starts with 1 error
console.log(nationalIdCheck("1199921234567890")); // sixth digit error
console.log(nationalIdCheck("123"));               // length error (edge case)