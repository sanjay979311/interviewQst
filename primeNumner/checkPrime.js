function primeNum(num) {
    if (num <= 1) return false;

    let i = 2;
    while (i * i <= num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}

let output = primeNum(13);
console.log(output); // true


// --------------------------------second ------------------------------------------

function primeNum(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

let output2 = primeNum(11);
console.log(output2); // true

