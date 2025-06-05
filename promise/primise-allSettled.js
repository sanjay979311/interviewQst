
//Waits for all promises, no matter if they resolve or reject.

//Returns an array of objects describing the outcome of each promise:

//{ status: "fulfilled", value: ... }

//{ status: "rejected", reason: ... }

let promise1 = new Promise((resolve,resect) =>{
    setTimeout(() =>{
       resect("1 Api call") 
    },100)
})

let promise2 = new Promise((resolve,resect) =>{
    setTimeout(() =>{
       resolve("2 Api call") 
    },200)
})

let promise3 = new Promise((resolve,resect) =>{
    setTimeout(() =>{
       resolve("3 Api call") 
    },200)
})

Promise.allSettled([promise1,promise2,promise3])
.then(res => console.log(res))
.catch(error => console.log(error))