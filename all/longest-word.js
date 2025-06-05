const stringArray = ["apple", "banana", "orange", "kiwi"];


const arr1 = ["apple", "banana", "orange", "kiwi"];
 
 let langeWord = arr1[0];
 for(let i=0; i<arr1.length;i++){
     if(arr1[i].length > langeWord.length){
        langeWord = arr1[i] 
     }
 }
 
 console.log(langeWord)
//  -------------------------------------------

function findLongestWord(array) {
  let longestWord = "";
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > longestWord.length) {
      longestWord = array[i];
    }
  }
  return longestWord;
}

const result = findLongestWord(stringArray);
console.log("The longest word is:", result);

//anser 2

const arr = ["apple", "banana", "orange", "kiwi"];

let newArr = [];
let longWord = "";
 for(let i=0; i <arr.length;i++){
  if(arr[i].length > longWord.length ){
      longWord = arr[i]
  }
 }

console.log(longWord)

// third 
console.log("Hello, World!");
let str = "i am aditi priya";

let updated= str.split(" ");
let largest = updated[0];

for (let i=0;i<updated.length;i++){
 if(updated[i].length>largest.length)
 largest= updated[i]
}
console.log(largest)


//4 way 


let str2 = "i am aditi priya from bihar currently ln delhi";
let arr2 = str2.split(" ");
let largWord = "";
for(let i=0;i<arr2.length;i++){
    if(arr2[i].length > largWord.length){
        largWord = arr2[i]
    }
}


console.log("langest word is",largWord)