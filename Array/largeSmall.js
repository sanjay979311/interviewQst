let arr = [20,5,1,9,8,2,3,7,19,15];

function largeAmall(arr){
    arr.sort((a,b) => a -b)
    let result = [];
    let start = 0;
    let end = arr.length-1;
    while(start <= end){
        if(start !== end){
             result.push(arr[end]) // push the largest
            result.push(arr[start]); // push the smallest
              
        }else{
            result.push(arr[start]) // middle element when only one left
        }
        start++;
        end --;
    }
    
    return result;
}

let output = largeAmall(arr);
console.log(output)
