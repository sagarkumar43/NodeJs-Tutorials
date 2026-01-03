console.log("1"); // first run this
setTimeout(() => {
    console.log("2"); // third run this
}, 2000);
console.log("3"); // second run this

// output:
// 1
// 3
// 2