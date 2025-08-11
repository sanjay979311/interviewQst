const employees = [
  { name: 'Alice', department: 'HR', salary: 50000 },
  { name: 'Bob', department: 'Engineering', salary: 60000 },
  { name: 'Charlie', department: 'HR', salary: 55000 }
];

//  Output -> { HR: ['Alice', 'Charlie' ], Engineering: ['Bob'] }
const emp = employees.reduce((acc, curr) => {
  const dept = curr.department;
  if (!acc[dept]) {
    acc[dept] = [];
  }
  acc[dept].push(curr.name);
  return acc;
}, {});

console.log(emp);