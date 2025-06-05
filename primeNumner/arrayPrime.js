let number = [1,2,3,4,5,10,13,17,20,15];

let primeNum = number.filter(num => {
    if (num <= 1) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
});

console.log(primeNum);  // [2, 3, 5, 13, 17]


// -----------------------------------second way ---------------------------------


let primeNum2 = [];

for (let i = 0; i < number.length; i++) {
    let num = number[i];
    let isPrime = true;

    if (num <= 1) {
        isPrime = false;
    } else {
        for (let j = 2; j < num; j++) {
            if (num % j === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) primeNum2.push(num);
}

console.log(primeNum2); // [2, 3, 5, 13, 17]
