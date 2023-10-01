// Create an iterator that generates an infinite sequence of numbers and a generator
// that yields a sequence of even numbers. Use the iterator and generator in
// different scenarios.

// Infinite sequence iterator
class InfiniteSequence {
    [Symbol.iterator]() {
      let num = 0;
      return {
        next: () => ({ value: num++, done: false })
      };
    }
  }

  const iterator = new InfiniteSequence()[Symbol.iterator]();
  for (let i = 0; i < 5; i++) {
    console.log(iterator.next().value);
  }
 
// Generator for even numbers
function* evenNumberGenerator() {
    let num = 0;
    while (true) {
      yield num;
      num += 2;
    }
  }
  
  const evenGen = evenNumberGenerator();
  for (let i = 0; i < 5; i++) {
    console.log(evenGen.next().value);
  }
  