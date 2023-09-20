const http = require('http');

const server = http.createServer((request, response) => {
  // Send a response
  response.end("I'm Sam");
});

// Listen on port 4000
const PORT = 4000;
server.listen(PORT)
