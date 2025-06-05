function createCounter(initialValue) {
    let current = initialValue;
    let initial = initialValue;

    return {
        increment() {
            return ++current;
        },
        decrement() {
            return --current;
        },
        reset() {
            current = initial;
            return current;
        }
    };
}

let counter = createCounter(4);
console.log(counter.increment()); // 5
console.log(counter.reset());     // 4
console.log(counter.decrement()); // 3
