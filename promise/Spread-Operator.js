const arr1 = [1,2,3]
const arr2 = [4,5,6]

let combineArray =  [...arr1,...arr2]
console.log(combineArray)

// ------------------------------------- 2 way -------------------------
const original = [10, 20, 30];
const copy = [...original];

console.log(copy); // [10, 20, 30]

// ---------------------------3 ---------------------------

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const merged = { ...obj1, ...obj2 };

console.log(merged); // { a: 1, b: 3, c: 4 }

