let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

let sumEven = 0;

for(let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if(num % 2 == 0){
        sumEven += num;  // ✅ just add the number
    }
}

console.log(sumEven); // ✅ Output: 110
