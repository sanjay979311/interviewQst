let str = "Welcome to Programiz"

let strArr = str.split(" ");
 let newArr = strArr.map(item =>
  item.split("").reverse().join("")
).join(" ")
console.log(newArr);