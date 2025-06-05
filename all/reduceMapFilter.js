
let arr = [2, 3, 4 ];
let output = arr.reduce((acc,current) =>{
    console.log("acc =>",acc,"current =>",current)
    return acc + current
},5)
console.log(output);




