let word = "my name is sanjay kumar";

// Define a function named convertToArray that takes a string as input
function convertToArray(str) {

  // Initialize an empty array to store the final list of words
  const result = [];

  // Create an empty string to temporarily store characters of the current word
  let word = "";

  // Loop through each character in the input string
  for (let i = 0; i < str.length; i++) {

      // Get the current character at index i
      const char = str[i];

      // If the current character is NOT a space
      if (char !== ' ') {
          // Add the character to the current word
          word += char;
      } 
      // If the current character IS a space AND a word has been formed
      else if (word) {
          // Push the completed word into the result array
          result.push(word);

          // Reset the word to start building the next word
          word = "";
      }
  }

  // After the loop ends, push the last word if it exists
  // (This is necessary because the last word won't be followed by a space)
  if (word) result.push(word);

  // Return the array of words
  return result;
}




// ------------------------------------second way ------------------------------------


function stringToArray(str) {
  let result = [];
  let currentWord = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (currentWord.length > 0) {
        result.push(currentWord);
        currentWord = '';
      }
    } else {
      currentWord += str[i];
    }
  }

  // Add the last word to the result if there's any
  if (currentWord.length > 0) {
    result.push(currentWord);
  }

  return result;
}

let arr = stringToArray(word);
console.log(arr);  // Output: ["my", "name", "is", "sanjay", "kumar"]
// ----------------------------------------third way ---------------------------------------

function stringToArray(str) {
  // Array to store the final list of words
  let result = [];

  // Temporary string to build the current word
  let word = '';

  // Flag to track whether we're currently inside a word
  let inWord = false;

  // Loop through each character of the input string
  for (let i = 0; i < str.length; i++) {
      const char = str[i]; // Current character

      // If the character is not a space, we're in a word
      if (char !== ' ') {
          word += char;      // Add character to current word
          inWord = true;     // Mark that we're inside a word
      } 
      // If the character is a space and we were in a word, the word has ended
      else if (inWord) {
          result.push(word); // Push the complete word to the result array
          word = '';         // Reset word for the next one
          inWord = false;    // We're no longer in a word
      }
  }

  // After the loop, if there's a word left, push it to the result
  if (word.length > 0) {
      result.push(word);
  }

  // Return the array of words
  return result;
}

let output = stringToArray(word)

console.log(output)