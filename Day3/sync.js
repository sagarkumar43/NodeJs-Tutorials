const fs = require('fs');


const data = fs.readFileSync('explaination.txt', 'utf-8');

console.log(data);
console.log("This runs after reading the file.");