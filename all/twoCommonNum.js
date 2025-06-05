const input1 = {a:3,b:2,c:3,d:10,e:12}
const input2 = {a:2,e:12,f:6,d:10} 
//output like  { d: 10, e: 12 }

function display(input1,input2){
     let obj = {};
     
     for(let i in input1){
         if(input1[i] == input2[i]){
            obj[i] = input1[i]
         }
     }

     return obj;
}

const output =  display(input1,input2);

console.log(output)


// array case
 let arr1= [10,20,30,40,50,60,70]
let arr2= [2,3,5,10,7,9,8,50] 


//filter common value from wto array

//solution 1
let filterArr = arr1.filter(val => arr2.includes(val))

//solution 2

let newArr = [];

for(let i =0; i<arr1.length; i++){
     
    if(arr2.includes(arr1[i])){
         newArr.push(arr1[i])
    }
}


console.log(newArr)



