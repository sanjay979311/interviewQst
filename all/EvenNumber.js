let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let newArr = arr.map((item) => {
    if (item % 2 === 0) {
     return item
    }else{
        return null
    }
});
let output = newArr.filter((data) => data!==null)
console.log(output)


let arr2 = [1, 9, 5, 7, 2];

let oddNumbers = arr2.filter((item) => item % 2 !== 0);
let evenNumbers = arr2.filter((item) => item % 2 === 0);

console.log("Odd Numbers:", oddNumbers);
console.log("Even Numbers:", evenNumbers);




