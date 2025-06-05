const arr= [1,2,3,4,5,10,8,9];
 let largest = arr[0];
 let sLargest = arr[0];
 for(let i=0; i<arr.length; i++){
     if(largest < arr[i]){
         sLargest = largest;
         largest = arr[i]
     }
     
     if(sLargest < arr[i] && largest > arr[i]){
         sLargest = arr[i]
     }
     
 }
 
 console.log(largest)
  console.log(sLargest)



//   second way 


const arr2= [1,2,3,4,5,6,20,25,40,9,8,7,30];
 let largestNum = arr[0];
 let secondLarge = arr[0];
 
 for(let i =0; i<arr2.length; i++){
     if(arr[i] > largestNum){
         secondLarge = largestNum
         largestNum = arr[i]
     }else if(arr[i] > secondLarge && arr[i] < largestNum){
         secondLarge = arr[i]
     }
 }
 
 console.log("largest",largestNum)
  console.log("secondLarge",secondLarge)



  //third way  
  let arr3 = [1,10,2,,4,18,35,8,50,6];
let sorted= arr3.sort((a,b)=>b-a)
console.log(sorted[1])
