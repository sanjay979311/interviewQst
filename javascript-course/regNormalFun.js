
// Regular Function:
// this depends on how the function is called (runtime binding).
const obj = {
  name: "Sanjay",
  regularFunc: function () {
    console.log("Regular:", this.name);
  },
};

obj.regularFunc(); // 👉 "Sanjay"

//  Arrow Function:
// this is lexically bound (it takes this from the outer scope).
const obj2 = {
  name: "Sanjay",
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  },
};

obj2.arrowFunc(); // 👉 undefined (or window.name if in browser)

//  Constructor Usage
// ✅ Regular Function:
// Can be used as constructors with new.


function Person(name) {
  this.name = name;
}
const p = new Person("Ravi");
console.log(p.name); // 👉 "Ravi"

// Arrow Function:
// Cannot be used as constructors. Will throw an error.

const Person = (name) => {
  this.name = name;
};


// Regular Function:
// Has access to arguments object (array-like object of passed arguments).



function showArgs() {
  console.log(arguments);
}
showArgs(1, 2, 3); // 👉 [1, 2, 3]

// Arrow Function:
// Does not have arguments (you must use rest ...args).


const showArgs = () => {
  console.log(arguments);
};
// ❌ ReferenceError: arguments is not defined

// Correct way:
const showArgs2 = (...args) => {
  console.log(args);
};
showArgs2(1, 2, 3); // 👉 [1, 2, 3]