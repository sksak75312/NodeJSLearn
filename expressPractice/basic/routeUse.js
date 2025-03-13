// express 導入
import express from 'express';

// express 物件
const app = express();

// 阜號設定
const port = 9000;

// GET 方法寫入
app.get('/', (req, res) => {
  res.send('Home');
});

// POST 方法寫入
app.post('/login', (req, res) => {
  res.send('Login');
});

// 進入 test 路徑，所有都匹配
app.all('/test', (req, res) => {
  res.send('Test route');
});

// 所有API方法請求不存在的時回傳 Not Found
app.all('*', (req, res) => {
  res.send('404 NOT Found');
});

// Express 伺服器設定
app.listen(port, () => {
  console.log('Express server run start');
});