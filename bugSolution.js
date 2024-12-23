const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate an asynchronous operation that might fail
  someAsyncOperation().then(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Success!');
  }).catch(err => {
    // Handle the error properly
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Internal Server Error');
  });

  // Handle errors during the response phase
  res.on('error', err => {
    console.error('Error sending response:', err);
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Example asynchronous operation that might fail
function someAsyncOperation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a random failure
      if (Math.random() < 0.5) {
        reject(new Error('Something went wrong!'));
      } else {
        resolve();
      }
    }, 1000);
  });
}