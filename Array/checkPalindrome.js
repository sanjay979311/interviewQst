function checkPalindrome(str) {
    let start = 0;
    let end = str.length - 1;

    while (start <= end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }

    return true; // ✅ Only return true after all checks pass
}

let str = "level";
let output = checkPalindrome(str);
console.log(output); // true
