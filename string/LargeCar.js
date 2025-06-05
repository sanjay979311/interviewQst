
let str = "sanjay kumar from khalilabad"; //find large char

let obj = {};
let large = str[0];

for(let i=0;i<str.length;i++){
  if(str[i] > large){
      large = str[i]
  }
}
console.log(large)
    
 




