
let str = "sanjay kumar from khalilabad";
 let obj = {}
for(let i=0; i<str.length;i++){
     if(str[i] === " ") continue
    if(obj[str[i]]){
        obj[str[i]]++
    }else{
        obj[str[i]] = 1
    }
}
console.log(obj)