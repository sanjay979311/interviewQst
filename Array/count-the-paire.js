let arr = ['red', 'green', 'yellow', 'green', 'red', 'blue', 'red', 'white', 'red', 'green', 'blue'];

let freq = {};
let result = {};

// First loop: Count occurrences
for (let color of arr) {
  if (freq[color]) {
    freq[color]++;
  } else {
    freq[color] = 1;
  }
}

// Second loop: Count pairs only
for (let color in freq) {
  let pairCount = Math.floor(freq[color] / 2);
  if (pairCount > 0) {
    result[color] = pairCount;
  }
}

console.log(result);
