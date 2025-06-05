let arr = ["apple", "mango", "apple", 
		"orange", "mango", "mango"]; 


        // ------------------------first way ----------------------
function removeDuplicates(arr) { 
	return arr.filter((item, index) => arr.indexOf(item) === index); 
} 
console.log(removeDuplicates(arr));


//other question  remove matching item
let arr2 = ["apple", "mango", "apple", "orange", "mango", "mango"];
let valueToRemove = "mango";

   let output = arr2.filter(item => item !==valueToRemove)
   console.log(output)


//or 

let myArr = arr.filter((val,index,self) =>{
    return self.indexOf(val) === index
})
console.log(myArr)

// ------------------------------second way --------------------------

let obj = {};
let newArr = [];

   for(let i=0; i<arr.length; i++){
       let key = arr[i];
       if(!obj[key]){
           obj[key] = true
           newArr.push(arr[i])
       }
   }
   
   console.log(newArr)

//    -----------------------------------------3 way ---------------------------

let newArr3 = [];

   for(let i=0; i<arr.length; i++){
       if(!newArr3.includes(arr[i])){
          newArr3.push(arr[i]) 
       }
   }
   
   console.log(newArr3)
