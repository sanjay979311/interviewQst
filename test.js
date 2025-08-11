const employees = [
  { name: 'Alice', department: 'HR', salary: 50000 },
  { name: 'Bob', department: 'Engineering', salary: 60000 },
  { name: 'Charlie', department: 'HR', salary: 55000 }
];

// how to group employees

let result = employees.reduce((acc,current) =>{

    let dept = current.department

    if(!acc[dept]){
        acc[dept] = [];
    }

    acc[dept].push(current.name)
    return acc

},{})

console.log(result)
