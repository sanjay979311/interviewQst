const arr= [1,2,3,4,5,10,8,9,30,25,12];
 let largest = -Infinity;
 let sLargest = -Infinity;
//  let largest = Number.MIN_VALUE;
//  let sLargest = Number.MIN_VALUE;
 
 for(let i =0; i<arr.length; i++){
      if(arr[i] > largest){
         sLargest = largest;
        //   console.log(largest)
         largest = arr[i]
        
        
     }
     else if(arr[i] > sLargest && arr[i] < largest){
         sLargest = arr[i]
     }
 }

 console.log('largest :',largest)
 console.log("second ",sLargest)

//  You used -Infinity which safely handles negative numbers (✔️).

// You skip duplicates of the largest number by checking arr[i] < largest (✔️).

// It's a clean and correct single-pass solution (✔️ O(n) time).

