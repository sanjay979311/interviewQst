
function add(a,b){
    console.log(arguments)
    // return a*b
}

 let add = (a,b) =>{
    console.log(arguments)
    // return a*b
}

add(2,3)

function car(name){
    this.brand = name
}

let car = (name) =>{
    this.brand = name
 }
let carData = new car("Maruti")
console.log(carData)

let userInfo = {
    name:"sanjay kumar",
    email:'sanjaygmail.com',
    displayName(){
        let test = () =>{
            console.log('email:'+ this.email)
        }
        test()
        return this.name + " : normal function"
    },
    displayEmail: () =>{
        return this.email + " : normal function"
    }
}

console.log(userInfo.displayName())
console.log(userInfo.displayEmail())


