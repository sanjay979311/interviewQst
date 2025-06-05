
let str = "sanjay kumar from khalilabad";

let obj = {};

for (let i = 0; i < str.length; i++) {
    let char = str[i]; // get the current character
    if (obj[char]) {
        obj[char]++;     // if it exists, increment count
    } else {
        obj[char] = 1;   // otherwise, initialize to 1
    }
}

console.log(obj);


// -------------------------------- second way ---------------------------------
for(let x of str){
    if(obj[x]){
        obj[x]+=1
    }else{
        obj[x] =1
    }
}


console.log(obj)

