var userlist = [
    { name: "sanjay", address: "khalilabad", age: 30 },
    { name: "deena", address: "gkp", age: 20 },
    { name: "sandeep", address: "basti", age: 30 },
    { name: "manish", address: "khalilabad", age: 30 },
    { name: "manish", address: "khalilabad", age: 30 },
    { name: "sanjay", address: "khalilabad", age: 30 },
];

// link https://www.youtube.com/watch?v=Aq2U87pNSJk

const obj = {};
const newList = [];

for (let i = 0; i < userlist.length; i++) {
    // const key = userlist[i].name && userlist[i].address &&  userlist[i].age;
    const key = userlist[i].name + userlist[i].address; // Combine name and address

    if (!obj[key]) {
        obj[key] = true;
        newList.push(userlist[i]);
    }
}

console.log(newList);



// ----------------------------------------------------third ------------------------------------------

const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 1, name: "Doe" }, // Duplicate key 'id'
    { id: 3, name: "Alice" },
    { id: 2, name: "Bob" }, // Duplicate key 'id'
  ];
  let obj2 = {}
  let result = []
  arr.map((item) => {
      key = item.id // Corrected to use 'id' as key
      if (!obj2[key]) {
        obj2[key] = true
          result.push(item)
      }
  })
  
  console.log(result)
  
  
//////////////// by function 
 
 function removeDublicate(arr){
     let obj = {};
     let result = [];
     
     arr.map((item) =>{
         let key = item.id;
         if(!obj[key]){
             obj[key] = true;
             result.push(item)
         }
     })
     return result
 }
 
 let output = removeDublicate(arr);