const http = require('http');

const server = http.createServer((request, response) => {
  response.setHeader('content-type', 'text/html;charset=utf-8');
  response.end('Hello');
});

server.listen(9000, () => {
  console.log('Server run start!!');
});
