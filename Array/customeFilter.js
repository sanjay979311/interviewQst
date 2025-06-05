function customFilter(arr, callback) {
    let result = []; // Initialize an empty array to store the filtered values

    // Loop through each element in the array
    for (let i = 0; i < arr.length; i++) {
        // Call the callback function with the current element, index, and the array
        if (callback(arr[i], i, arr)) {
            result.push(arr[i]); // If the condition is true, add the element to the result array
        }
    }

    return result; // Return the filtered array
}


const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = customFilter(numbers, (num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]