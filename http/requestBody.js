const http = require('http');

const server = http.createServer((request, response) => {
  let body = '';

  request.on('data', (chunk) => {
    body += chunk;
  });

  request.on('end', () => {
    console.log(body);
    response.end('Request body');
  });
});

server.listen(9000, () => {
  console.log('requestBody Server run start');
});
