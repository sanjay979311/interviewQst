

let row = "";
for (let i = 2; i <= 20; i++) {
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\t";
    }
    row += "\n"; // Add a new line after each row
}

console.log(row);

// ------------------------------------ print table  ----------------------------------------------


console.log("1 to 10 Table:");
for (let i = 2; i <= 10; i++) {
    let row = "";
    for (let j = 1; j <= 10; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}
