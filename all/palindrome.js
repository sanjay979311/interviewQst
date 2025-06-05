function palindrome(data) {
    let start = 0;
    let end = data.length - 1;

    while (start < end) {
        if (data[start] !== data[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true;
}

let str = 'level';
console.log(palindrome(str)); // Output: true



function palindrome(data) {
    for (let start = 0, end = data.length - 1; start < end; start++, end--) {
        if (data[start] !== data[end]) {
            return false;
        }
    }

    return true;
}

let str2 = 'level';
console.log(palindrome(str2)); // Output: true
