const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

const output = numbers.filter((val) =>{
    return val <  5
})

console.log(output)


const books = [
    { title: 'Book 1', year: 2010 },
    { title: 'Book 2', year: 2015 },
    { title: 'Book 3', year: 2005 },
    { title: 'Book 4', year: 2020 }
  ];
  
  // Filter books published after 2010
  const recentBooks = books.filter(book => book.year > 2010);
  console.log('recentBooks =>',recentBooks)
  // Result: [{ title: 'Book 2', year: 2015 }, { title: 'Book 4', year: 2020 }]


  let newObj = obj.filter((item) => {
    if(item.name=="aditi" && item.phone=="12345678" ){
     return item
    }
})

console.log(newObj)
  