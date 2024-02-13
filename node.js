// node.js

const fs = require('fs');

console.log('Hello, Jenkins!');

// Example: Read a file
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        process.exit(1);
    }
    console.log('File content:', data);
});

// Example: Writing to a file
const contentToWrite = 'This is a sample content.';
fs.writeFile('output.txt', contentToWrite, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        process.exit(1);
    }
    console.log('Content written to output.txt');
});

// Example: Exiting with a status code
process.exit(0);
