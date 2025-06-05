//## Prototypes are the mechanism by which JavaScript objects inherit features from one another
// link : https://www.youtube.com/watch?v=6b601MrVEi0


Object.prototype.myAppData = "this is my app data";
Object.prototype.myFunction = function(){
    return "custome function"
}
String.prototype.otherData = "this is string data"

let users = {
    getAge:function(){
        let age = new Date().getFullYear() - this.birth;
        return age;
    },
    getFullName:function(){
        return this.name + " "  + this.lastName
    }
}

let student = {
    name:"sanjay",
    birth:2000,
    lastName:"kumar gautam",
    // getAge:users.getAge
    
}

let teacher = {
    name:"pujari",
    birth:1980,
    lastName:"thakur",
    // getAge:users.getAge
   
}

teacher.__proto__ = users;
student.__proto__ = users;
console.log(student.getAge())
console.log(teacher.getAge())