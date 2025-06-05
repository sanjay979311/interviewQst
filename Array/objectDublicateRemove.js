//how to remove dublicate key from object

const obj = {
    id1: "John",
    id2: "Jane",
    id1: "Doe", // Duplicate key 'id1'
    id3: "Alice",
    id2: "Bob", // Duplicate key 'id2'
};

const seenValues = new Set();
const newObj = {};

for (const key in obj) {
    if (!seenValues.has(obj[key])) {
        seenValues.add(obj[key]);
        newObj[key] = obj[key];
    }
}

 console.log(newObj);


 // second way


let newObj2 = {};
for(let key in obj){
    newObj2[key] = obj[key]; // Assign each key-value pair to the new object
}

 console.log(newObj2);
