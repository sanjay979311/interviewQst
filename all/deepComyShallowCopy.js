
// shallow copy
let obj = {
    name:"sanjay"
}

// let newObj = Object.assign({},obj);
let newObj = {...obj}
newObj.name="dinesh"
console.log(obj.name)
console.log(newObj.name)


// https://www.youtube.com/watch?v=mk7RpyHMUrU

//deep copy

 let user = {
    name:"pintu",
    address:{
        city:"khalilabad",
        state:"UP"
    },
    g
 }
 

 let newUser = JSON.parse(JSON.stringify(user))
 newUser.address.city = "Basti"

 console.log(user.address.city)
 console.log(newUser.address.city)
