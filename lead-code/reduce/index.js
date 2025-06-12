// Array to Object with Index as Key

let arr = ["a", "b", "c"];

let obj = arr.reduce((acc, curr, index) => {
  acc[index] = curr;
  return acc;
}, {});

console.log(obj);
// Output: { 0: 'a', 1: 'b', 2: 'c' }
// ✅ 2. Array of Pairs to Object

let arr2 = [["name", "John"], ["age", 30]];

let obj2 = Object.fromEntries(arr);

console.log(obj2);
// Output: { name: 'John', age: 30 }
// ✅ 3. Array to Object by Custom Key
// If you want to create an object where the key is based on the value:

let arr3 = ["a", "b", "c"];

let obj3 = arr.reduce((acc, curr) => {
  acc[curr] = true;
  return acc;
}, {});

console.log(obj3);
// Output: { a: true, b: true, c: true }
// ✅ 4. Convert Even Numbers to Object with Key = Value

let arr4 = [2, 4, 6];

let obj4 = arr.reduce((acc, curr) => {
  acc[curr] = curr;
  return acc;
}, {});

console.log(obj4);
// Output: { 2: 2, 4: 4, 6: 6 }