function objectsAreEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    // Check if both objects have the same number of properties
    if (keys1.length !== keys2.length) {
        return false;
    }

    // Check if all properties and their values are the same
    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

let obj1 = {name: "sanjay", email: "sanjay@gmail.com"};
let obj2 = {name: "sanjay", email: "sanjay@gmail.com"};

console.log(objectsAreEqual(obj1, obj2)); // Output: true



let arr = [1,2,3,4,5]
let newArr = arr.slice(0,5)
arr.splice(0,3)
console.log(arr)
console.log('newArr',newArr)
