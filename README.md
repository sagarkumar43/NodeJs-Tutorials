# Node.js Tutorials

This repository contains tutorials and examples for learning Node.js.

## Day1 - Introduction to Node.js

This folder covers the basics of Node.js, including what it is, why it's used, and key concepts like the event loop.

### Files:
- **explaination.txt**: Contains explanations in Hindi about Node.js fundamentals, including:
  - What is Node.js?
  - Why use Node.js?
  - The secret behind Node.js (Event Loop)
  - Where Node.js is used (REST APIs, real-time applications, etc.)

- **first-program.js**: A simple "Hello, Node.js!" program demonstrating how to run JavaScript on the server side.

## Day2 - Modules in Node.js

This folder explains the module system in Node.js, including custom modules, core modules, and third-party modules.

### Files:
- **explaination.txt**: Contains explanations in Hindi about modules in Node.js, covering:
  - What are modules?
  - Node.js module system (CommonJS)
  - How to create custom modules
  - How the require() function works
  - Core modules (built-in like fs, path, os)
  - Third-party modules (like express, mongoose)
  - Difference between module.exports and exports

- **custom-module/**: A folder demonstrating custom module creation and usage.
  - **math.js**: Defines and exports `add` and `subtract` functions using `module.exports`.
  - **app.js**: Imports the math module using `require()` and demonstrates its usage by performing addition and subtraction operations.