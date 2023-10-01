// Use the prototype property to add a new method to an existing object
// constructor, such as Array or String.


Array.prototype.customMethod = function () {
    for (let i = 0; i < this.length; i++) {
      this[i] *= 2; 
    }
  };
  

  const myArray = [1, 2, 3, 4, 5];

  myArray.customMethod();

  console.log(myArray); 
  