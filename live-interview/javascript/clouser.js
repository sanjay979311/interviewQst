
function outerFunction(){
    let num = 10;
    
    function innerfun(){
        // let num2 = 20
        console.log("num1",num)
         console.log("num2",num2)
    }
    innerfun()
}
let num2 = 40

outerFunction()

// ------------------------------or ------------------------------------

function outerFunction(){
    // let num = 10;
    
    function innerfun(){
        let num2 = 20
        console.log("num1",num)
         console.log("num2",num2)
    }
    innerfun()
}
let num = 30
outerFunction()