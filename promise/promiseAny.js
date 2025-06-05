// Create three sample promises:
let promise1 = new Promise((resolve, reject) => {
  // Fulfills after 100ms
  setTimeout(() => {
    resolve("✅ Result from API call 1");
  }, 100);
});

let promise2 = new Promise((resolve, reject) => {
  // Fulfills after 200ms
  setTimeout(() => {
    resolve("✅ Result from API call 2");
  }, 200);
});

let promise3 = new Promise((resolve, reject) => {
  // Fulfills after 200ms
  setTimeout(() => {
    resolve("✅ Result from API call 3");
  }, 200);
});

// Use Promise.any to get the first successful result:
Promise.any([promise1, promise2, promise3])
  .then(result => {
    // This will run as soon as the fastest promise fulfills:
    console.log("First fulfilled:", result);
  })
  .catch(err => {
    // Only happens if ALL promises reject:
    console.error("All promises were rejected:");
    console.error(err.errors);     // Array of all rejection reasons
  });
