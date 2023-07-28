// Create an array of numbers and perform the following operations:
// => Find the length of the array.
// => Access and display specific elements using indexing.
// =>Use array methods like push() ,pop(), shift(), unshift(), join(),
//  delete(),concate(),flat(),splice() and slice() to modify the array.
// Create an object representing a person with properties like name, 
// age, and gender. Implement a function that displays the person's details.

// Array operations
const numbersArray = [1, 2, 3, 4, 5];

// Find the length of the array
const arrayLength = numbersArray.length;
console.log("Array length:", arrayLength);

// Access and display specific elements using indexing
console.log("Element at index 0:", numbersArray[0]);
console.log("Element at index 2:", numbersArray[2]);

// Array methods
numbersArray.push(6); // Add element at the end of the array
console.log("After push:", numbersArray);

numbersArray.pop(); // Remove the last element
console.log("After pop:", numbersArray);

numbersArray.shift(); // Remove the first element
console.log("After shift:", numbersArray);

numbersArray.unshift(0); // Add element at the beginning of the array
console.log("After unshift:", numbersArray);

const arrayAsString = numbersArray.join(", "); // Convert the array to a string
console.log("Array as string:", arrayAsString);

// 'delete' is not recommended for arrays as it leaves an undefined hole, but here's how you would use it:
delete numbersArray[2];
console.log("After delete:", numbersArray);

const secondArray = [7, 8, 9];
const combinedArray = numbersArray.concat(secondArray); // Concatenate two arrays
console.log("Concatenated array:", combinedArray);

const flattenedArray = combinedArray.flat(); // Flatten nested arrays
console.log("Flattened array:", flattenedArray);

const splicedArray = flattenedArray.splice(1, 3); // Remove elements from the array
console.log("After splice:", splicedArray);

const slicedArray = flattenedArray.slice(1, 4); // Extract elements from the array
console.log("After slice:", slicedArray);

// Object representing a person
const person = {
  name: "Harsh Rana",
  age: 19,
  gender: "Male",
};

// Function to display person's details
function displayPersonDetails(personObj) {
  console.log("Name:", personObj.name);
  console.log("Age:", personObj.age);
  console.log("Gender:", personObj.gender);
}

// Display person's details
displayPersonDetails(person);
