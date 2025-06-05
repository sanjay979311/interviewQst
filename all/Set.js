const arr = [1, 2, 3, 3, 4, 5, 5, 6, 7, 8, 9];
function findSubArr(arr,target){
    let result = [];
    let seen = [];

    for(let i=0; i<arr.length;i++){
        let value = arr[i];
        let component = target - value;
      
        if(seen.includes(component)){
             result.push([component,value])
        }
         seen.push(value)
    }
    return result
}

let target = 10;
let output = findSubArr(arr,target);
console.log(output)





let seen = new Set();
let result = [];

for(let i=0;i<arr.length;i++){
    let component = target - arr[i]; 
    // 7-1 = 6
    // 7-2 =5
    // 7-3 = 4
    // 7-3 = 4
    // 7-4 = 3
    // 7-5 = 2
    // 7-5 = 2
    // 7-6 = 1
     
    if(seen.has(component)){
         result.push([component,arr[i]])
         console.log(arr[i])
        //  console.log(component)
    }
    seen.add(arr[i])  // 1,2,3,3,4,5,5,6,7,8,9
    // console.log(seen) 
}

//  console.log(result)
