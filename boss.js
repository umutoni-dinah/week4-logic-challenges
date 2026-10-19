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