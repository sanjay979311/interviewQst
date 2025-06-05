let arr = [1,2,3,5,2,3,7,8,5];
let obj = {};

for(let i=1;i<=arr.length;i++){
    let key = arr[i];
    if(obj[key]){
       obj[key]++
    }else{
        obj[i] = 1
    }
}

console.log(obj)


let str = "sanjay";
let arr2 = str.split("");

let newArr = arr2.reduce((acc, current) => {
    if (!acc[current]) {
        acc[current] = 1;
    } else {
        acc[current]++;
    }
    return acc;
}, {});

console.log(newArr);