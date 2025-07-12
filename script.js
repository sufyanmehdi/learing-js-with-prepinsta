// Check if a Number is Positive or Negative in Java

// let num = 5;
//  if (num > 0){
//     console.log("The number is positive");
//  } else if (num < 0){
//     console.log("The number is negative");
//  }else 
//     console.log("Zero");


// even or odd

// let number = 20;
// if (number % 2 == 0){
//     console.log(number + " is even")
// }else {
//     console.log(number + "is odd");
// }

//sum of first N Natural number

// let n = 10;
// let sum = 0;    
// for (let i =1; i <=n;i++){
//     sum += i;
//         console.log(sum);
// }


//sum of  N Natural number

// let n = 5;
// let sum = 0;
// for(let i = 1; i <=n; i++){
//     sum += i;
//     console.log(sum);
// }

//Sum of numbers in a given range

// let a = 5;
// let b = 10;
// let sum = 0;

// for(let i = a; i <= b; i++){
//     sum = sum + i;
//     console.log("The sum is " + sum);
// }

//Greatest of two numbers

// let num1 = 50;
// let num2 = 20;
// if(num1 == num2){
//     console.log("both are equal");
// }else if  (num1 > num2){
//     console.log(num1 + "is greater");
// } else{
//     console.log(num2 + "is greater");
// }

//Greatest of the Three numbers

// let num1 = 10;
// let num2 = 20;
// let num3 = 30;
// if (num1 >= num2 && num1 >= num3){
//     console.log(num1 + " is the greatest");
// } else if (num2 >= num1 && num2 >= num3){
//     console.log(num2 + " is the greatest");
// } else {
//     console.log(num3 + " is the greatest");
// }

//Leap year or not

// let year = 2020;

// if (year % 400 == 0){
//     console.log(year + "is a leap year");
// } else if (year % 4 == 0 && year % 100 !=0){
//     console.log(year + "is a leap year");
// } else{
//     console.log(year + "is not  a leap year");
// }


//Prime number

// let n = 23;
// let num = 0;
// if (n < 2) {
//     console.log("The given is number " + n + " is not prime")
// };
// for (let i = 1; i <= n; i++) {
//     if (n % 2 == 0)
//         num += 1;
// }
// if (num > 2) {
//     console.log("The given is number " + n + " is not prime");
// } else {
//     console.log("The given is number " + n + " is prime");
// }


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
