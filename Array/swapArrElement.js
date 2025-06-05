let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];
//  swap  2 ,5 and 5 ,2

for(let i=0;i<arr.length;i++){
    if(arr[i] ===2){
        newArr.push(5)
    } else if(arr[i] ===5){
        newArr.push(2)
    }else{
       newArr.push(arr[i]) 
    }
}
console.log(newArr)

// seond 

function swapArrayElements(arr, element1, element2) {
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element1) {
            arr[i] = element2;
        } else if (arr[i] === element2) {
            arr[i] = element1;
        }
    }
    return arr;
}

let arr2 = [1, 2, 3, 4, 5, 6];

// Swap 2 with 5 and 5 with 2
arr = swapArrayElements(arr2, 2, 5);

console.log(arr2); // Output: [1, 5, 3, 4, 2, 6]
