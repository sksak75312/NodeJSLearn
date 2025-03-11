// 引入 http 模組
const http = require('http');

const server = http.createServer((request, response) => {
  // 取得請求方法
  const { method } = request;

  // 取得路徑
  const { pathname } = new URL(request.url, 'http://127.0.0.1');

  // 設定 response header 為中文
  response.setHeader('content-type', 'text/html;charset=utf-8');

  // 寫入判斷，不能同時有兩個 response.end 回傳
  // 也要給未取得頁面的一個 response.end
  if (method === 'GET' && pathname === '/login') {
    response.end('登入頁面');
  } else if (method === 'GET' && pathname === '/reg') {
    response.end('註冊頁面');
  } else {
    response.end('Not found');
  }
});

server.listen(9000, () => {
  console.log('Server run start');
});
