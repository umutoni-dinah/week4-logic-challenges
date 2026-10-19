//sumTo(n) sum of 1…n. Then do it with the formula n(n+1)/2 and compare.
// Pseudocode:
// sumTo: Start at 0, add each number from 1 through n, and return the sum.
// sumToFormula: Calculate n * (n + 1) / 2 and return the result.
// Compare both answers in the tests.


// Readability vs. cleverness: The loop clearly shows how 1 through n are added.
// The formula below is shorter and faster, but may be less obvious at first.
function sumTo(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
}

function sumToFormula(n) {
  return (n * (n + 1)) / 2;
}

console.log(sumTo(5), sumToFormula(5));   // 15, 15
console.log(sumTo(10), sumToFormula(10)); // 55, 55
console.log(sumTo(0), sumToFormula(0));   // 0, 0 (edge case)

//isPrime(n) only checks divisors up to Math.sqrt(n). Handle 0, 1 and negatives.
// Pseudocode:
// If n is less than 2, return false.
// Check each possible divisor from 2 up to the square root of n.
// If n divides evenly by any divisor, return false.
// If no divisor is found, return true.

function isPrime(n) {
  if (n < 2) {
    return false;
  }

  for (let divisor = 2; divisor <= Math.sqrt(n); divisor++) {
    if (n % divisor === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(12)); // false
console.log(isPrime(1));  // false (edge case)
console.log(isPrime(-5)); // false

//printPyramid(rows) for 4 rows:
// Pseudocode:
// Start with an empty pyramid string.
// For each row from 1 to rows:
//   Add 2 * row - 1 stars.
//   Add a newline between rows.
// Return the completed pyramid.

function printPyramid(rows) {
  let pyramid = "";

  for (let row = 1; row <= rows; row++) {
    for (let star = 1; star <= 2 * row - 1; star++) {
      pyramid += "*";
    }

    if (row < rows) {
      pyramid += "\n";
    }
  }

  return pyramid;
}

console.log(printPyramid(4));

//fibonacci(n)returns a string of the first n Fibonacci numbers: fibonacci(8) → &quot;0, 1,
//1, 2, 3, 5, 8, 13&quot;.
// Pseudocode:
// Start with the first two Fibonacci numbers: 0 and 1.
// Repeat n times:
//   Add the current number to the result string.
//   Calculate the next number by adding the previous two.
// Return the result string.

function fibonacci(n) {
  if (n <= 0) {
    return "";
  }

  let first = 0;
  let second = 1;
  let result = "";

  for (let i = 0; i < n; i++) {
    if (i > 0) {
      result += ", ";
    }

    result += first;

    const next = first + second;
    first = second;
    second = next;
  }

  return result;
}

console.log(fibonacci(8)); // "0, 1, 1, 2, 3, 5, 8, 13"
console.log(fibonacci(1)); // "0"
console.log(fibonacci(0)); // "" (edge case)

//guessingGameSimulator(secret) simulates a computer guessing a number 1–100 with
//binary search (always guessing the middle of the remaining range). Log each guess and
//return how many guesses it took. It should never need more than 7.
// Pseudocode:
// Set the guessing range from 1 to 100 and the guess count to 0.
// While the range is still valid:
//   Guess the middle number and log it.
//   Increase the guess count.
//   If it matches secret, return the count.
//   If the guess is too low, move the lower bound up.
//   If it is too high, move the upper bound down.

function guessingGameSimulator(secret) {
  let low = 1;
  let high = 100;
  let guesses = 0;

  while (low <= high) {
    const guess = Math.floor((low + high) / 2);
    guesses++;

    console.log("Guess:", guess);

    if (guess === secret) {
      return guesses;
    } else if (guess < secret) {
      low = guess + 1;
    } else {
      high = guess - 1;
    }
  }

  return guesses;
}

console.log("Guesses needed:", guessingGameSimulator(1));
console.log("Guesses needed:", guessingGameSimulator(73));
console.log("Guesses needed:", guessingGameSimulator(100)); // edge of the range