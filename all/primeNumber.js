
// Original array of numbers
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter() to keep only the prime numbers
var primeNumbers = numArray.filter(function(num) {
    // Prime numbers are greater than or equal to 2
    if (num < 2) return false;

    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // If num is divisible by any i, it's not prime
        if (num % i === 0) return false;
    }

    // If no divisors were found, num is prime
    return true;
});

// Output the list of prime numbers
console.log(primeNumbers); // Output: [2, 3, 5, 7]

// ------------------------------------------------second way ---------------------------------

// var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19]
var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);


function isPrime(num) {
  if (num <= 1) return false; // Numbers less than or equal to 1 are not prime
  for (let i = 2; i < num; i++) {
      if (num % i === 0) {
          return false; // If num is divisible by any number other than 1 and itself
      }
  }
  return true; // If no divisors were found, num is a prime number
}
// Example of user input (in a real-world scenario, this could be from a form or console input)
const userInput = 12
console.log(`Is ${userInput} a prime number? `, isPrime(userInput));

