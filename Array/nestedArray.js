let arr = [1, [2, [3, [4, 5]]]];

function customFlatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      // Recursively flatten the inner array
      result = result.concat(customFlatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

let output = customFlatten(arr)
console.log(output)