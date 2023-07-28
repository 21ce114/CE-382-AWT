// Create a program that declares and initializes variables of different data 
// types (string, number, boolean) and displays their values. Write a function 
// that takes two numbers as parameters and returns their sum.

// Declare and initialize variables of different data types
const myString = "Harsh Rana";
const myNumber = 114;
const myBoolean = true;

// Function to calculate the sum of two numbers
function addNumbers(num1, num2) {
  return num1 + num2;
}

// Display values of the variables
console.log("myString:", myString);
console.log("myNumber:", myNumber);
console.log("myBoolean:", myBoolean);

// Testing the function
const num1 = 10;
const num2 = 20;
const sum = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is:`, sum);
