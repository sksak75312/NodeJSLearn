const http = require('http');

const server = http.createServer((request, response) => {
  // 請求方法
  console.log(request.method);

  // http 的版本號
  console.log(request.httpVersion)

  // URL中的路徑及查詢字符串
  console.log(request.url)

  // 請求的 headers
  console.log(request.headers);

  response.end('Request data')
})

server.listen(9000, () => {
  console.log('Server run start')
})