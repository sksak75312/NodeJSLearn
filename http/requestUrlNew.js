const http = require('http');

const server = http.createServer((request, response) => {
  const url = new URL(request.url, 'http://127.0.0.1');
  console.log(url.pathname);
  console.log(url.searchParams.get('num'))
  response.end('Request HTTP Data New');
});

server.listen(9000, () => {
  console.log('Server run start');
});
