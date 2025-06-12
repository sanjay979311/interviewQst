for (var i = 5; i >= 1; i--) {
    var str = "";
    for (var j = i; j >= 1; j--){
          str += i;
    }
    console.log(str);
}


// second 


for(let i=1;i<=5;i++){
    let result = "";
    
    
    for(let j=5; j>=i; j--){
        //  console.log(j)
          result += i;
    }
    
     console.log(result)
}

// ---------------------------------------

let output = "";

for(let i=5;i>=1;i--){
    
    for(let j=1;j<=i;j++){
         output+=j
    }
     output+= "\n"
}

console.log(output)

/*
 12345
1234
123
12
1
*/

