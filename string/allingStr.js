let str = "a##wc#r";
//output like ###awcr

let newArr = [];
let strArr = [];
for(let i=0;i<str.length;i++){
    if(str[i] === "#"){
        newArr.push(str[i])
    }else{
         strArr.push(str[i])
    }
}

let output = [...newArr,...strArr]
console.log(output.join(" "))