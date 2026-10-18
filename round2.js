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

//countChar(str, char) how many times a character appears (case-insensitive).
// Pseudocode:
// Set a counter to 0.
// Convert the target character to lowercase.
// Loop through each character in str.
// If the lowercase characters match, increase the counter.
// Return the counter.

function countChar(str, char) {
  let count = 0;
  const target = char.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === target) {
      count++;
    }
  }

  return count;
}

console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L"));  // 2, case-insensitive
console.log(countChar("", "a"));       // 0 (edge case)