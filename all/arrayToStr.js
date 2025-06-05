const myArray = ['Hello', 'World'];
const myString = myArray.join(', '); // Using ', ' as the separator

console.log(myString); // Output: 'Hello, World'

//In this example, the join(', ') method joins the array elements with a comma and a space as the separator, 
//resulting in the string 'Hello, World'.

//If you want to join the array elements without any separator, you can use join(''):

const myArray2 = ['Hello', 'World'];
const myString2 = myArray2.join('');

console.log(myString2); // Output: 'HelloWorld'
