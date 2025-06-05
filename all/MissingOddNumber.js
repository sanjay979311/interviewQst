let arr = [5,7,9,11,15,18];
// output = 13
let n = arr[arr.length-1];

let missing = [];

for(let i=1; i<=n; i++){
    if((!arr.includes(i)) && (i % 2!==0 && i>=13)){
        missing.push(i)
    }
}
console.log(missing)