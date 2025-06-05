let arr = [1, 2, 3, 4, 5, 6];
let newArr = [];
//place 4 to 10 and 5 to 16
for(let i=0; i<arr.length;i++){
    if(arr[i] == 4){
        newArr.push(10)
    }else if(arr[i] == 5){
        newArr.push(16)
    }else{
        newArr.push(arr[i])
    }
}

console.log(newArr); // Output: [1, 2, 3, 6]