import express from 'express';

const app = express();

const port = 9000;

// 定義 Middleware 功能
const identityMiddleware = (req, res, next) => {
  const { code } = req.query;

  if (code === '512') {
    next();
  } else {
    res.send('Not Found');
  }
};

app.use('/admin', identityMiddleware);

app.get('/home', (req, res) => {
  res.send('前台');
});

// 在 app.Method 中的 options 傳入 Middleware
app.get('/admin/dashboard', (req, res) => {
  res.send('後台');
});

// 在 app.Method 中的 options 傳入 Middleware
app.get('/admin/chart', (req, res) => {
  res.send('後台圖表');
});

app.all('*', (_, res) => {
  res.send('沒有此頁面');
});

app.listen(port, () => {
  console.log('Express Server run start');
});
