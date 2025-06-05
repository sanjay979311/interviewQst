let words =  "online javascript ediztor for freey";
let arr = words.split("");
  let large = arr[0];
  let secondLarge = arr[0];
//   console.log(arr)
  
  for(let i=0; i<arr.length;i++){
      if(arr[i] > large){
          secondLarge = large;
          large = arr[i]
      }else if(arr[i] > secondLarge && arr[i] < large ){
          secondLarge = arr[i]
      }
  }
 console.log("large =>",large)
  console.log("secondLarge =>",secondLarge)

  