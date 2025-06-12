let arr = [
  { name: "ABC", gender: "M" },
  { name: "1232", gender: "F" },
  { name: "ASDF", gender: "M" },
  { name: "QWER", gender: "F" },
  { name: "ZXCV", gender: "F" },
  { name: "ASXCV", gender: "M" }
];

let result = { M: [], F: [] };

for (let student of arr) {
  result[student.gender].push(student);
}

console.log(result);

// ------------------------------second------------------------
let arr2 = [
  { name: "ABC", gender: "M" },
  { name: "1232", gender: "F" },
  { name: "ASDF", gender: "M" },
  { name: "QWER", gender: "F" },
  { name: "ZXCV", gender: "F" },
  { name: "ASXCV", gender: "M" },
   { name: "anshu", gender: "O" }
];
let result2 = { Male: [], Female: [], Other: [] };

for (item of arr) {
  let key =
    item.gender === "M" ? "Male" :
    item.gender === "F" ? "Female" :
    "Other"; // fallback for 'O' or anything else
  result2[key].push(item);
}

console.log(result2);
