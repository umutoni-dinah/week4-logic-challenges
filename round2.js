//reverseString(str) with a loop, not .reverse().
// Pseudocode:
// Start with an empty string called reversed.
// Loop through str from the last character to the first.
// Add each character to reversed.
// Return reversed.

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello"));  // "olleh"
console.log(reverseString("Kigali")); // "ilagiK"
console.log(reverseString(""));       // "" (edge case)