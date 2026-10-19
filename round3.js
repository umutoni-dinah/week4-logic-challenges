//sumTo(n) sum of 1…n. Then do it with the formula n(n+1)/2 and compare.
// Pseudocode:
// sumTo: Start at 0, add each number from 1 through n, and return the sum.
// sumToFormula: Calculate n * (n + 1) / 2 and return the result.
// Compare both answers in the tests.

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
