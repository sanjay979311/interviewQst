
let words = "online javascript editor for free";  // Input string

let arr = words.split(" ");  // Split into an array: ["online", "javascript", "editor", "for", "free"]

let output = arr.reduce((longest, current) => {
    // Compare lengths: if current word is longer, return it; else return longest
    return current.length > longest.length ? current : longest;
}, "");  // Initial value for longest is an empty string

console.log(output);  // Expected output: "javascript"


// -------------------------------------------------------------second way ---------------------------
  let large = arr[0];
//   console.log(arr)
  
  for(let i=0; i<arr.length;i++){
      if(arr[i].length > large.length){
          large = arr[i]
      }
  }
 console.log(large)