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

//isPalindrome(str) ignores spaces, punctuation and case. "never odd or even" is a palindrome.
// Pseudocode:
// Make a new string containing only letters and digits, all lowercase.
// Compare characters from the beginning and end, moving toward the middle.
// If any pair differs, return false.
// If all pairs match, return true.

function isPalindrome(str) {
  let cleaned = "";

  for (let i = 0; i < str.length; i++) {
    const character = str[i].toLowerCase();

    if (character >= "a" && character <= "z") {
      cleaned += character;
    }
  }

  for (let left = 0, right = cleaned.length - 1; left < right; left++, right--) {
    if (cleaned[left] !== cleaned[right]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("Never odd or even")); // true
console.log(isPalindrome("Hello"));             // false
console.log(isPalindrome("!!!"));               // true (edge case: no letters)

//titleCase(str) "welcome to kigali tech hub" => "Welcome To Kigali Tech Hub"
// Pseudocode:
// Make the string lowercase and split it into words.
// For each word, capitalize its first letter.
// Join the words with spaces and return the result.

function titleCase(str) {
  const words = str.toLowerCase().split(" ");
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 0) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    if (i > 0) {
      result += " ";
    }

    result += words[i];
  }

  return result;
}

console.log(titleCase("welcome to kigali tech hub")); // Welcome To Kigali Tech Hub
console.log(titleCase("hELLO WORLD"));                // Hello World
console.log(titleCase(""));                           // "" (edge case)

//maskPhone(phone) &quot;0788123456&quot; → &quot;078****456&quot;. Return &quot;Invalid&quot; unless it&#39;s 10
//digits starting with 07.
// Pseudocode:
// Check that the phone has 10 characters and starts with "07".
// Loop through every character; if any is not a digit, return "Invalid".
// Build the result from the first 3 digits, 4 asterisks, and last 3 digits.

function maskPhone(phone) {
  if (phone.length !== 10 || phone[0] !== "0" || phone[1] !== "7") {
    return "Invalid";
  }

  for (let i = 0; i < phone.length; i++) {
    if (phone[i] < "0" || phone[i] > "9") {
      return "Invalid";
    }
  }

  let masked = "";

  for (let i = 0; i < 3; i++) {
    masked += phone[i];
  }

  masked += "****";

  for (let i = 7; i < 10; i++) {
    masked += phone[i];
  }

  return masked;
}

console.log(maskPhone("0788123456")); // "078****456"
console.log(maskPhone("0712345678")); // "071****678"
console.log(maskPhone("07812"));      // "Invalid" (edge case)


//longestWord(sentence) return the longest word; if tied, the first one.
// Pseudocode:
// Set the current word and longest word to empty strings.
// Loop through each character in the sentence.
// If it is not a space, add it to the current word.
// When a space or the end is reached, compare word lengths.
// Save the word only if it is longer, so ties keep the first word.
// Return the longest word.

function longestWord(sentence) {
  let currentWord = "";
  let longest = "";

  for (let i = 0; i <= sentence.length; i++) {
    if (i < sentence.length && sentence[i] !== " ") {
      currentWord += sentence[i];
    } else {
      if (currentWord.length > longest.length) {
        longest = currentWord;
      }
      currentWord = "";
    }
  }

  return longest;
}

console.log(longestWord("I love programming")); // "programming"
console.log(longestWord("red blue tan"));       // "red" (tie: first word)
console.log(longestWord(""));                   // "" (edge case)