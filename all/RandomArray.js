let arr = ["banana","apple","mango","orange"];
function shuffle(arr){
   let shuffleArray = [];
   let useIndexes = [];
   let i=0;
   while(i < arr.length){
    let randomNumber =  Math.floor( Math.random() * arr.length);
    if(!useIndexes.includes(randomNumber)){
        shuffleArray.push(arr[randomNumber]);
        useIndexes.push(randomNumber)
        i++
    }
    
   }
   return shuffleArray
}

let output = shuffle(arr)
console.log(output)



//  let x = Math.random(); // give us decimal value 0 to 9
//   let x = Math.random() * 10
// let x = Math.floor(Math.random() * 10)
// let x = Math.floor(Math.random() * 10) + 1
// let x = Math.floor(Math.random() * (25 - 15)) + 15
// console.log(x)

function getRandomNum(max,min){
    // return Math.floor(Math.random() * (max - min)) + min
    return Math.floor(Math.random() * (max - min +1)) + min
}

console.log(getRandomNum(50,25))

