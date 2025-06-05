let str = "hi sanjay how are u"; // reverse str

let arr = str.split(" ");
let result = arr.map((item) =>
     item[0].toUpperCase() + item.substr(1)
).join(" ")