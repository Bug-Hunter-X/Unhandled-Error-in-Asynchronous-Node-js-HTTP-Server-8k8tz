# Unhandled Error in Asynchronous Node.js HTTP Server

This repository demonstrates a common error in Node.js servers: not properly handling errors within asynchronous operations.  Improper error handling can lead to open connections and resource leaks, degrading server performance and stability.

## The Bug

The `bug.js` file contains a simple HTTP server that simulates an asynchronous operation. If the operation fails, the error is logged to the console, but the connection remains open. This is problematic because the client may never receive a response, and the server continues to hold onto resources.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle errors.  It uses the `res.on('error', ...)` event listener to properly handle errors during the response phase and closes the connection gracefully.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js` and observe the behavior.  You might see error messages in the console but requests may hang.
4. Run `node bugSolution.js` and observe the improved error handling.  Errors will be handled correctly and connections will be closed.