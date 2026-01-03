const fs = require('fs');


fs.readFile('explaination.txt', 'utf-8', (err, data) => {
    console.log(data);
});
console.log("This runs before reading the file.");