//Prime number within a given range

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

let lower = 1;
let upper = 20;

for (let i = lower; i <= upper; i++) {
  if (isPrime(i)) {
    console.log(i);
  }
}
