//So the entire Promise.all(...) will:

//❌ Immediately reject as soon as one fails (in this case promise1)

// The .then(...) block will never run

//You should handle the rejection using .catch(...)

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("failed call");
  }, 100);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 Api call");
  }, 200);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3 Api call");
  }, 200);
});

Promise.all([promise1, promise2, promise3])
  .then(res => console.log("All resolved:", res))
  .catch(err => console.error("Error in one promise:", err));
