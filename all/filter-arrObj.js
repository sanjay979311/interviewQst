let obj = [
    {name:"anybody",phone:"12345678"},
    {name:"random",phone:"123459678"}, 
    {name:"aditi",phone:"12345678"},
    {name:"priya",phone:"098765432"}
    ]
    // output [{name:"aditi",phone:"12345678"}]
    
    let newArr = [];
    for(let i=0;i<obj.length;i++){
        if(obj[i].name == "aditi" && obj[i].phone=="12345678"){
            newArr.push(obj[i])
        }
    }
    console.log(newArr)
    
    


        
       let arr =  obj.filter((item) => {
           return item.name === "aditi"  &&  item.phone==="12345678"
       })
       console.log(arr)
    
    
    
    