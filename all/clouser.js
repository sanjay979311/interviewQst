let arr = [1,2,3,4,5,6,7];
 
 for(var i=0; i<arr.length; i++){
     ((i) =>setTimeout(() =>{
         console.log(i);
     },1000 ))(i)
 }