/*
Problem:
The task is to create a function that takes in an array of integers and 
a target number. The function should find all the unique pairs of integers 
in the array that add up to the target number. The output should be in the 
form of an array of arrays, with each sub-array containing a pair of integers.
Example:
Input:
    arr: [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9]
    target: 7
Output:
    [[1, 6], [2, 5], [3, 4]]
*/

function findPairsWithSum(arr, target) {
    // Initialize an empty array to store the pairs
    const result = [];

    // Initialize a Set to keep track of seen numbers
    const seen = new Set();

    // Iterate through each number in the array
    for (let num of arr) {
        // Calculate the complement needed for the current number to reach the target
        const complement = target - num;

        // Check if the complement is already seen
        if (seen.has(complement)) {
            // If yes, a pair is found, so add it to the result array
            result.push([complement, num]);
        }

        // Add the current number to the set of seen numbers
        seen.add(num);
    }

    // Return the final array containing all the pairs
    return result;
}

// Example usage:
const inputArray = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];
const targetSum = 7;

// Call the function with the example input
const output = findPairsWithSum(inputArray, targetSum);

// Log the output to the console
console.log(output); // Output: [[1, 6], [2, 5], [3, 4]]



/*
Write a JavaScript function to capitalize the first letter of each word in a string.
Example:
console.log(capitalizeWords('globtier infotech pvt. ltd.'));
"Globtier Infotech Pvt. Ltd."
*/

https://www.youtube.com/watch?v=c3vDrvDOi98

function findPairsWithSum(arr, target) {
    const pairs = [];
    const seenNumbers = new Set();

    for (const num of arr) {
        const complement = target - num;

        if (seenNumbers.has(complement)) {
            pairs.push([complement, num]);
        }

        seenNumbers.add(num);
    }

    return pairs;
}

// Example usage:
const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];
const target = 7;
const result = findPairsWithSum(arr, target);
console.log(result);

//  new Question

  let records = [2,3,5,1,3,4,5,6,1,2,7,7,2,1]  //find the repeted value 


//   let arr = [2,3,5,1,3,4,5,6,1,2,7,7,2,1]
 

let newArr = records.filter((item,index)  => {
    return (records.indexOf(item) !== records.lastIndexOf(item)) && records.indexOf(item) == index  
})
console.log(newArr)

//second way 

let obj = {}
let newArr2 = []

for(let i=0; i<arr.length; i++){
   if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && arr.indexOf(arr[i]) === i){
    newArr2.push(arr[i])
   }
}




function display(){
    
    console.log("name is :",name)
    var name = "sanjay kumar"
     console.log(" Phone Num :",phoneNo)
      
}
 let  phoneNo = 979211
  display()
