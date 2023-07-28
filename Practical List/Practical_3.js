// Implement following features of ECMASCRIPT 6.
//  The let keyword
//  The const keyword
//  Arrow Functions
//  The (Spread Of) ... Operator
//  For/of
//  Map Objects
//  Set Objects
//  Classes
//  Promises
//  Symbol
//  Default Parameters
//  Function Rest Parameter

let x = 10;
if (true) {
  let x = 20;
  console.log(x); // Output: 20
}
console.log(x); // Output: 10

const PI = 3.14159;
// PI = 3.14; // This will throw an error, as PI is a constant and cannot be reassigned.

// Regular function
function add(a, b) {
    return a + b;
  }
  
  // Arrow function
  const addArrow = (a, b) => a + b;
  
console.log(add(2, 3)); 
console.log(addArrow(2, 3));
  
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
  
console.log(arr2);
  
const arr = [1, 2, 3];
for (const element of arr) {
  console.log(element);
}
// Output: 1, 2, 3

const myMap = new Map();
myMap.set("name", "Harsh");
myMap.set("age", 19);

console.log(myMap.get("name")); 
console.log(myMap.get("age")); 

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Ignored, as 2 is already present

console.log(mySet); 

const mySet2 = new Set();
mySet2.add(1);
mySet2.add(2);
mySet2.add(2); // Ignored, as 2 is already present

console.log(mySet2); 


class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const Harsh = new Person("Harsh", 19);
  Harsh.sayHello(); 

  
  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Data fetched successfully!");
      }, 2000);
    });
  };
  
  fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

    
    const mySymbol = Symbol("mySymbol");
    const obj = {
      [mySymbol]: "This is a symbol key",
    };
    
    console.log(obj[mySymbol]); 

    
    function greet(name = "Guest") {
        console.log(`Hello, ${name}!`);
      }
      
      greet(); 
      greet("Harsh"); 

      
      function sum(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
      }
      
      console.log(sum(1, 2, 3, 4, 5)); 

      
      function sum(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
      }
      
      console.log(sum(1, 2, 3, 4, 5)); 
      