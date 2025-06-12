const obj = {
   name:"sanjay",
   email:"sanjay@gmail.com",
   address:"khalilabad"
}

 let {email:personEmail} = obj;
 personEmail="dinesh@gmail.com"
 console.log(personEmail)
console.log(obj.email)