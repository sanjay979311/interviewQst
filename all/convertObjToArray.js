const myObject = { a: 1, b: 2, c: 3 };
const myArray = Object.values(myObject);

console.log(myArray); // Output: [1, 2, 3] value only


const myArray2 = Object.keys(myObject).map(key => myObject[key]);

console.log(myArray2); // Output: [1, 2, 3]


const myArray3 = Object.entries(myObject).map(([key, value]) => value);

console.log(myArray3); // Output: [1, 2, 3]

