# Week 4: Logic Challenges

JavaScript solutions for Workshop 2. Run a round with Node:

```sh
node round1.js
node round2.js
node round3.js
node boss.js
```

## Challenges solved

- **Round 1 — Numbers & conditions:** `isLeapYear`, `getBMICategory`, `motoFare`, `convertSeconds`, `changeMaker`
- **Round 2 — Strings:** `reverseString`, `countChar`, `isPalindrome`, `titleCase`, `maskPhone`, `longestWord`, `compress`
- **Round 3 — Loops & patterns:** `sumTo`, `isPrime`, `printPyramid`, `fibonacci`, `guessingGameSimulator`
- **Boss round (bonus):** `validatePassword`, `romanNumeral`, `nationalIdCheck`

## Points

**49 listed challenge points**, including 15 Boss bonus points: 5 for Round 1, 14 for Round 2, 15 for Round 3, and 15 for the Boss round.

## Hardest bug

The hardest bug was the leap-year rule order. My first condition checked divisibility by 4 before checking century years, which would incorrectly make 1900 a leap year. Testing 1900 and 2000 exposed the issue. I fixed it by checking divisibility by 400 first, then 100, then 4.
