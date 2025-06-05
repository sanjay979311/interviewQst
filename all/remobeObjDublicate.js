const obj = {
    id1: "John",
    id2: "Jane",
    id1: "Doe", // Duplicate key 'id1'
    id3: "Alice",
    id2: "Bob", // Duplicate key 'id2'
  };




let uniqueObj = {};
for (let [key, value] of Object.entries(obj)) {
  if (!uniqueObj[key]) {  // Only add if the key doesn't already exist in uniqueObj
    uniqueObj[key] = value;
  }
}

console.log(uniqueObj);

  
  // Convert object to array of key-value pairs
  const entries = Object.entries(obj);
  
  // Create a Map to store unique keys
  const uniqueKeysMap = new Map();
  
  // Filter out duplicates based on keys
  entries.forEach(([key, value]) => {
    uniqueKeysMap.set(key, value);
  });
  
  // Reconstruct object from unique keys
  const uniqueObj2 = Object.fromEntries(uniqueKeysMap);
  
  console.log(uniqueObj2);
  