function bubbleSort(arr) {
    const length = arr.length;

    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

let arrayToSort = [9, 5, 2, 8, 3, 1];
let sortedArray = bubbleSort(arrayToSort);
console.log(sortedArray);
