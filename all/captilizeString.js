let str = "Welcome to Programiz";


let arr = str.split(" ")

let newArr = arr.map((item) =>{
    return item[0].toUpperCase() + item.substr(1)
}).join(" ")

console.log(newArr)

// --------------------------------------------------------------------------

// best solution 

function capitalize(str) {
    if (!str) return ''; // Handle empty string
     return str.charAt(0).toUpperCase() + str.substr(1);
   // or  return str.charAt(0).toUpperCase() + str.slice(1);
}


console.log(capitalize(str)); // Output: "Welcome to Programiz"


// -------------------------------------------------------------

function  getStr(sentance){
    let str = sentance.split(' ');
   
    for(let i=0; i<str.length;i++){
       str[i] = str[i][0].toUpperCase() + str[i].substring(1)
      
    }
     
    return str.join(' ')
}

const output = getStr(str)
 console.log(output)


 //second solution

 let words =  "online javascript editor for free";
let arr2 = words.split(" ");

  let output2 = arr.map((item) =>{
     return item = item[0].toUpperCase() + item.substr(1)
  }
     
 )
  console.log(output2)