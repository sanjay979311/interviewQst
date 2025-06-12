
let obj = {
    name: "sanjay",
    address: {
        state: "up"
    }
};

let data = {...obj,address:{...obj.address}};
data.name="dinesh"
data.address.state="bihar"
console.log(data)
console.log(obj)