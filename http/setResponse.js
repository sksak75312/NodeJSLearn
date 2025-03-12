const http = require('http');

const server = http.createServer((request, response) => {
  // 設定回傳狀態碼，五大類
  // response.statusCode = 404;

  // 設定回應狀態描述，正常不太會設定這選項
  response.statusMessage = 'Response.StatusMessage';

  // 回應狀態標頭，可能會有多個相同的
  response.setHeader('content-type', 'text/html;charset=uft-8');
  response.setHeader('my-content-type', 'CustomHeader')
  response.setHeader('num', [1, 2, 3])

  // 回應內容，write 可以多個， end 只能一個
  response.write('Response.write1 | ')
  response.write('Response.write2 | ')
  response.end('Set Response');
});

server.listen(9000, () => {
  console.log('Server run start');
});
