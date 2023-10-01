// Create a JavaScript module that exports a class representing a calculator with
// methods to perform basic arithmetic operations. Import the module in another
// JavaScript file and use the calculator class to perform calculations.

import { Calculator } from './calculator.js';

const calculator = new Calculator();

const result1 = calculator.add(5, 3);
console.log(`5 + 3 = ${result1}`);

const result2 = calculator.subtract(10, 4);
console.log(`10 - 4 = ${result2}`);

const result3 = calculator.multiply(6, 7);
console.log(`6 * 7 = ${result3}`);

try {
  const result4 = calculator.divide(8, 0); 
  console.log(`8 / 0 = ${result4}`);
} catch (error) {
  console.error(error.message);
}
