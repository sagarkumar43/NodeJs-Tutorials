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

## Day3 - File System and Sync vs Async

This folder introduces the File System (fs) module in Node.js and demonstrates the difference between synchronous and asynchronous operations.

### Files:
- **explaination.txt**: Contains explanations in Hindi about the fs module and sync vs async operations, including:
  - What is the fs module in Node.js?
  - Difference between synchronous (blocking) and asynchronous (non-blocking) operations

- **sync.js**: Demonstrates synchronous file reading using `fs.readFileSync()`. This blocks the execution until the file is read, then continues with the next statements.

- **async.js**: Demonstrates asynchronous file reading using `fs.readFile()` with a callback. This allows the program to continue executing while the file is being read in the background.

## Day4 - HTTP Server in Node.js

This folder covers creating HTTP servers using Node.js built-in HTTP module, including basic server setup, routing, and JSON responses.

### Files:
- **explaination.txt**: Contains explanations in Hindi about HTTP servers in Node.js, covering:
  - What is an HTTP server?
  - Node.js built-in HTTP module
  - Creating your first HTTP server
  - Request and Response objects
  - Manual routing (before Express)
  - JSON responses for APIs

- **server.js**: A basic HTTP server that responds with "Hello, World!" on any request.

- **Node.js**: Demonstrates manual routing with different responses for home (/), about (/about), and 404 pages.