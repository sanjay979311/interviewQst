let str = "sanjay kumar from khalilabad kumar"; //count dublicate

let arr = str.split(" ");
let obj = {}
for(let i=0;i<arr.length;i++){
    let key = arr[i];
    if(!obj[key]){
        obj[key] = 1
        
    }else{
        obj[key]++
    }
}

console.log(obj)