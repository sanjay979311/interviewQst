

let reverseStr = "";
for(let i=str.length-1;i >= 0; i--){
    reverseStr += str[i]
}

console.log(reverseStr)

  //second  



let str = " Online"; // reverse str

let arr = str.split("");
let result = [];
  for(let i=arr.length; i>=0;i--){
      result.push(arr[i])
  }
  let output = result.join("");
  
  console.log(output)
