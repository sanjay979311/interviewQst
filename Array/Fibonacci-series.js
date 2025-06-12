// Print Fibonacci series upto n = 10  
let n=10; 
let result=[]; 
if(n>=0){ 
result.push(0) 
} 
if(n>=1){ 
result.push(1) 
} 
for(let i=2;i<n;i++){ 
result.push(result[i-1]+result[i-2]) 
}
console.log(result)