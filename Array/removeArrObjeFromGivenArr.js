let arrOfOjb = [ 
  { name: 'a', volume: '3', subject: 'abc' }, 
  { name: 'b', volume: '8', subject: 'cde' }, 
  { name: 'c', volume: '6', subject: 'abc' }, 
  { name: 'd', volume: '2', subject: 'xyz' }, 
  { name: 'e', volume: '1', subject: 'xyz' }, 
  { name: 'f', volume: '5', subject: 'abc' }, 
  { name: 'g', volume: '9', subject: 'opq' } 
]; 

let arr = [2, 3, 1, 8]; 

let result = arrOfOjb.filter(item => !arr.includes(Number(item.volume)));

console.log(result);
