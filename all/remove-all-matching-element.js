let arr = [1, 2, 2, 1, 3, 10, 4, 10]
let output = arr.filter((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
        return item
    }
})


console.log(output)


// second result 

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        newArr.push(arr[i])
    }
}

console.log(newArr);