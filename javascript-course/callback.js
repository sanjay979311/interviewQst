
function dataFetching(calback){
    console.log("data fetching....")
    setTimeout(() =>{
        console.log("data fetched!")
        calback("some data")
    },500)
    
}

function displayDetail(data){
    console.log("hi sanjay",data)
}
let result = dataFetching(displayDetail)

// ------------------------------2-----------------------------

function greet(name,calback){
    console.log("my name is:",name)
    calback()
}

function displayDetail(){
    console.log("hi sanjay")
}
let output = greet("sanjay",displayDetail)