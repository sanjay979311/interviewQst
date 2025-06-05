function largeSmall(arr) {
    // Step 1: Sort the array in ascending order
    // Example: [1, 9, 5, 7, 2] becomes [1, 2, 5, 7, 9]
    arr.sort((a, b) => a - b);

    // Step 2: Initialize an empty array to store the result
    let result = [];

    // Step 3: Set two pointers - one at the start and one at the end
    let start = 0;
    let end = arr.length - 1;

    // Step 4: Loop until the two pointers meet or cross
    while (start <= end) {
        // If there are two different elements (not the middle one in an odd-length array)
        if (start !== end) {
            // Push the largest remaining element
            result.push(arr[end]);

            // Push the smallest remaining element
            result.push(arr[start]);
        } else {
            // If both pointers are at the same index (middle element in odd-length array), push once
            result.push(arr[start]);
        }

        // Move start pointer forward and end pointer backward
        start++;
        end--;
    }

    // Step 5: Return the result array
    return result;
}

// Example usage
let arr = [1, 9, 5, 7, 2];
let output = largeSmall(arr);
console.log(output); // Output: [9, 1, 7, 2, 5]
