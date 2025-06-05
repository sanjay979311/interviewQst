/* Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/

 

const map = (arr, fn) => {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(fn(arr[i], i));
    }
    return newArr;
}


const arr = [1, 2, 3, 4];
const fn = (n) => n + 1;

var ret = map(arr, fn);
console.log(ret);