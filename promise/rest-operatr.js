function getDetails(name,email,...otherDtl){
    return {
        name,
        email,
        otherDetail:otherDtl
        
    }
    
}

let user  = getDetails("sanjay","sanjay@gmail.com","khalilabad, santkabir,utter pradesh");
console.log("name",user.name)
console.log("email",user.name)

user.otherDetail.map((rec) =>{
    console.log("other detail : ",rec)
})