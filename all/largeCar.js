let words =  "online javascript editor for free";
let arr = words.split("");
  let large = arr[0];
//   console.log(arr)
  
  for(let i=0; i<arr.length;i++){
      if(arr[i] > large){
          large = arr[i]
      }
  }
 console.log(large)
 


