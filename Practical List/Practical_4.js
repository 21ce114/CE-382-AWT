// Write a function that calculates the factorial of a given number using recursion.
// Create a nested function that performs a specific task and 
// invoke it within another function.
// (NOTE: Implement the concept of variable scope in functions by declaring 
//   variables with different scopes (global, local) and accessing them).

let globalVariable = "I am a global variable";

function factorialRecursive(number) {
  
  let localVariable = "I am a local variable";

  if (number === 0 || number === 1) {
    return 1;
  } else {
    return number * factorialRecursive(number - 1);
  }
}

// Function to demonstrate accessing variables with different scopes
function variableScopeDemo() {
  console.log("Accessing the global variable:", globalVariable);
  console.log("Trying to access the local variable:", localVariable); //Error: localVariable is not defined in this scope
}

const num = 5;
console.log(`Factorial of ${num} is:`, factorialRecursive(num)); 

variableScopeDemo();
