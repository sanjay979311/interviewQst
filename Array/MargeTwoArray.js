
let arr2 = [3,7,12,34,56,90];
let arr1 = [4,9,12,45]

function margeTwoArr(arr1,arr2){
    let result = [];
    let i=0 , j=0;
    let data = 0;
    
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            result.push(arr1[i])
            i++;
        }else{
           result.push(arr2[j])
           j++
        }
         data ++
    }
    
    while(i < arr1.length){
        result.push(arr1[i]);
        i++;
        data ++
    }
     while(j < arr2.length){
        result.push(arr2[j]);
        j++;
        data ++
    }
    return result;
}
let output = margeTwoArr(arr1,arr2)
console.log(output)
// ----------------------------------------2----------------------------------

let result = [];
let d1 = 0;
let d2 = 0;
let d3 = 0;
while(d1 < arr1.length && d2 < arr2.length){
    if(arr1[d1] < arr2[d2]){
        result[d3] = arr1[d1]
       
        d1++
    }else{
         result[d3] = arr2[d2]
       
        d2++
    }
     d3++
}

while(d1 < arr1.length){
    result[d3] = arr1[d1];
    d1++
    d3++
}
while(d2 < arr2.length){
    result[d3] = arr2[d2];
    d2++
    d3++
}

console.log(result)