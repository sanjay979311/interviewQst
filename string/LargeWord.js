let str = "hi sanjay how are u"; //find large char

let arr = str.split(" ")
let largeWord = str[0]

for(let i=0;i<arr.length; i++){
    if(arr[i].length > largeWord.length){
        largeWord = arr[i]
    }
}

console.log(largeWord)