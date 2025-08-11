const original = {
  name: "Sanjay",
  age: 30,
  skills: ["JS", "React"],
  address: {
    city: "Delhi",
    pin: 110001
  }
};

const copy = structuredClone(original);


// Modify the copy
copy.name = "Dinesh";
copy.address.city = "Mumbai";

console.log(original.name);         // "Sanjay"
console.log(original.address.city); // "Delhi" ✅ (not affected)
