import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

const port = 9000;

// Middleware 功能
function recordMiddleware(req, res, next) {
  const { path: reqPath, ip } = req;

  fs.appendFileSync(path.resolve('record.log'), `${reqPath}: ${ip}\r\n`);

  next();
}
// 全域 Middleware 使用
app.use(recordMiddleware);

app.get('/home', (req, res) => {
  res.send('前台');
});

app.get('/admin', (req, res) => {
  res.send('後台');
});

app.all('*', (_, res) => {
  res.send('NOT Found')
})

app.listen(port, () => {
  console.log('Express Server run start');
});
