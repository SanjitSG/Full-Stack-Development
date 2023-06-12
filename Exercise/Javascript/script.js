// 1. Write a program to print factorial of any number
// e.g. : Factorial of 5! => 5 * 4 * 3 * 2 * 1 = 120

// let number = +prompt('Enter a positive number to find Factorial');
// let fact = 1,
//   temp = number; //for printing purpose.

// while (number >= 1) {
//   // 4 // 3 // 2 // 1
//   fact = fact * number; // 1*4 // 4*3 = 12 // 12*2=24 // 24 *1
//   number--; // 3 // 2 // 1
// }

// console.log(`Factorial of ${temp} is ${fact}`); //Factorial of 4 is 24

/*---------------------------------------------------------------------------- */

// 2. write a program to print fibonacci series up to 10 numbers.
// Fibonacci series => '0 1' 1 2 3 5 8 13 21 34
// default 0 1 = 1
//           1 + 1 = 2
//               1 + 2 = 3
//                   2 + 3 = 5
//                       3 + 5 = 8
//                           5 + 8 = 13 ...

// let terms = +prompt('Enter number of terms');
// let digitOne = 0,
//   digitSecond = 1,
//   fib;
// 5;
// console.log('Fibonacci Series: ');
// for (let i = 1; i <= terms; i++) {
//   console.log(digitOne);
//   fib = digitOne + digitSecond;
//   digitOne = digitSecond;
//   digitSecond = fib;
// }

/*---------------------------------------------------------------------------- */

// Ex: Write a program to find a number is armstrong or not

// An Armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits.
// for e.g.: 153 => 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// let number = prompt('Enter a number');
// let digits = number.length;
// let sum = 0;

// let temp = number;

// while (temp > 0) {
//   let reminder = temp % 10;

//   sum = sum + reminder ** digits;

//   //removing last digit from number
//   temp = parseInt(temp / 10); //convert float into integer
// }
// if (sum == number) console.log(`${number} is an Armstrong number`);
// else console.log(`${number} is not an Armstrong number`);

/*---------------------------------------------------------------------------- */

// Ex: Write a program to print reverse of any number

// let number = prompt('Enter a Number'),
//   temp = number;
// reverse = 0;

// while (number > 0) {
//   remainder = number % 10;
//   reverse = reverse * 10 + remainder;

//   number = Math.floor(number / 10); // or parseInt can be used to eliminate value after decimal point.
// }

// console.log(`Reverse of of ${temp} is ${reverse}`);

/*---------------------------------------------------------------------------- */

// Ex: Write a program to check whether a number a is prime or not

// const number = prompt('Enter a Number');
// let isPrime = true;

// if (number == 1) {
//   console.log('1 is neither prime nor composite number');
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(`${number} is Prime`);
//   } else {
//     console.log(`${number} is not a Prime`);
//   }
// } else {
//   console.log('number is not prime');
// }

/*---------------------------------------------------------------------------- */

// Ex: Write a program to find out leap year
// one year has 365 days
// 1. a leap year has 366 days => 366 % 4 = 0 => leap year
// 2. also years like 1700, 1800, 1900 are not leap year which are divisible by 100
// 3. also year 2000 was a leap year which is divisible by 400

// that means years which are divisible by 4, year which are not divisible 100 and year which are divisible are 400 is considered as leap year.

// let year = 2048;

// if (year % 4 == 0 && year % 100 != 0) {
//   console.log(`${year} is leap year`);
// } else if (year % 400 == 0) {
//   console.log(`${year} is a leap year`);
// } else {
//   console.log(`${year} is not a leap year`);
// }

/*---------------------------------------------------------------------------- */

// Ex: Program to print the below format
// * * * * *
// * * * *
// * * *
// * *
// *

// using nested loops we can print following patters
// let n = 5;
// let string = '';

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n - i; j++) {
//     string += '*';
//   }
//   string += '\n';
// }
// console.log(string);

console.log('--------------------------------------------------------');

//Ex:

for (let i = 5; i >= 1; i--) {
  // Outer loop for rows
  for (let j = 1; j <= i; j++) {
    // Inner loop for columns
    document.write(j + ' ');
  }
  document.write('<br>'); // Print a new line after each row
}
