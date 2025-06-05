function fetchData(callback) {
    // Simulating an asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
      const data = { message: "Data fetched successfully!" };
      callback(data); // Call the callback function with the fetched data
    }, 1000);
  }
  
  function processData(data) {
    console.log("Processing data:", data.message);
  }
  
  // Usage: Pass the processData function as a callback to fetchData
  fetchData(processData);


  function mainFunction(callback) {
    console.log("Performing operation...");
    // Use setTimeout to simulate an asynchronous operation
    setTimeout(function() {
      callback("Operation complete");
    }, 1000);
    }
    
    // Define the callback function
    function callbackFunction(result) {
    console.log("Result: " + result);
    }
    
    // Call the main function with the callback function
    mainFunction(callbackFunction);
    //This code is contributed by Veerendra Singh Rajpoot



function displayer(some){
  console.log(some)
}
function firstfun(){
  displayer("sanjay")
}
function secondfun(){
  displayer("dinesh")
}

firstfun()
secondfun()
    




function mainFun(callback){
  setTimeout(() =>{
      callback('operating complete')
  },)
}
function displayDetail(name){
  console.log('api Data',name)
}

mainFun(displayDetail)