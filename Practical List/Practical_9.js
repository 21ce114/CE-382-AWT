// Implement dynamic imports using the import() function to load modules
// asynchronously based on certain conditions.

async function loadModule(condition) {
    if (condition) {
      // Dynamically import moduleA.js when the condition is true
      const moduleA = await import('./moduleA.js');
      moduleA.greetA();
    } else {
      // Dynamically import moduleB.js when the condition is false
      const moduleB = await import('./moduleB.js');
      moduleB.greetB();
    }
  }

  const condition = false; 
  
  // Load the appropriate module based on the condition
  loadModule(condition);
  