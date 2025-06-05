function createCounter() {
  let count = 0; // This variable is in the lexical scope of the inner function

  function increment() {
    count++; // inner function accesses outer function's variable
    console.log(`Current count: ${count}`);
  }

  return increment;
}

const counter1 = createCounter(); // creates a new counter
counter1(); // Current count: 1
counter1(); // Current count: 2

const counter2 = createCounter(); // creates a separate new counter
counter2(); // Current count: 1
