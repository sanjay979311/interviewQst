
// Regular Function:
// this depends on how the function is called (runtime binding).
const obj = {
  name: "Sanjay",
  regularFunc: function () {
    console.log("Regular:", this.name);
  },
};

obj.regularFunc(); // 👉 "Sanjay"

const obj2 = {
  name: "Sanjay",
  arrowFunc: () => {
    console.log("Arrow:", this.name);
  },
};

obj2.arrowFunc(); // 👉 undefined (or window.name if in browser)