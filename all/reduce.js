const numbers = [1, 2, 3, 4, 5,,10,8,9,6,7];
 const output = numbers.reduce((val,i) =>{
    return  val
 })




 const cart = [
    { item: 'Product A', price: 30 },
    { item: 'Product B', price: 20 },
    { item: 'Product C', price: 50 }
  ];

  const cartVal =  cart.reduce((acc,current) =>{
    return acc + current.price
  },0)

  console.log(cartVal)

  const maxOutput = numbers.reduce((max,curent) =>{
     if(curent > max){
        max =  curent
     }
     return  max;
  },0)

  console.log("maximum value =>",maxOutput)


  let arr = [1,2,3,4,5]
let sum = arr.reduce((acc,current) =>{
    return acc = acc+current
},0)

console.log(sum)