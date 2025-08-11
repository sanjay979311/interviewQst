let arr = [1, [2, [3, [4, 5]]]];

function flatten(arr){
    let result = []
    arr.forEach((item) =>{
        if(Array.isArray(item)){
            result = result.concat(flatten(item))
        }else{
            result.push(item)
        }
    })
    return result
}

let output = flatten(arr);
console.log(output)

// ------------or---------------
let result = arr.flat(Infinity);

console.log(result);  // [1, 2, 3, 4, 5]