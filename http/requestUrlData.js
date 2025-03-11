const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  
  console.log('true', url.parse(request.url, true))

  console.log('No true', url.parse(request.url))
  response.end('Request URL Data')
})

server.listen(9000, () => {
  console.log('Server run start')
})