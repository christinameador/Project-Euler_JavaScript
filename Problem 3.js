// Find the largest prime factor of a composite number.
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143?

// Solution
function largestPrimeFactor(n) {
    let d = Math.ceil(Math.sqrt(n));
  
      function isPrime(n) {
          let i;
          let limit = Math.ceil(Math.sqrt(n));
          for (i=3; i<=limit; i+=2) {
              if (n % i === 0) {
                  return false;
              }
          }
          return true;
      }
      
      // start with an odd number
      d = (d & 1) === 0 ? d - 1 : d;
  
      //while (!(isPrime(d) && n % d === 0)) {
      while (!(n % d === 0 && isPrime(d))) {
          d -= 2; // odd numbers only
      }
      return d;
  }
  
  console.log(largestPrimeFactor(97383975143));